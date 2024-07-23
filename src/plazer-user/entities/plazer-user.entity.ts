import {
  Column,
  Entity,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MiniApp } from 'src/mini-app/entities/mini-app.entity';
import { PasswordReset } from './password-reset.entity';
// import { OrganizationPlazeruser } from 'src/organization-plazeruser/entities/organization-plazeruser.entity';

@Entity({ name: 'plazer-user' })
export class PlazerUser {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ unique: true, nullable: false })
  userName: string;

  @Column({ nullable: false })
  userPassword: string;

  @Column({ nullable: false, name: 'FirstName' })
  userFName: string;

  @Column({ nullable: false, name: 'LastName' })
  userLName: string;

  @Column({ nullable: false })
  AddressL1: string;

  @Column({ nullable: false })
  AddressL2: string;

  @Column({ nullable: true })
  AddressL3: string;

  @Column({ nullable: false, unique: true })
  Email: string;

  @Column({
    type: 'enum',
    enum: ['male', 'female', 'unspecified'],
    nullable: true,
  })
  gender: string;

  @Column({ nullable: true })
  skills: string;

  @Column({ nullable: true })
  DoB: Date;

  @Column({ nullable: false })
  phone: string;

  @Column({
    type: 'enum',
    enum: ['Member', 'Organization Admin', 'Plazer Admin', 'Developer'],
    nullable: false,
  })
  role: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  gitlink: string;

  @Column({ nullable: true })
  active: boolean;

  @ManyToMany(() => MiniApp, (miniApp) => miniApp.plazerUsers)
  miniApps: MiniApp[];

  @OneToMany(() => PasswordReset, (passwordReset) => passwordReset.user)
  passwordResets: PasswordReset[];

  // @OneToMany(() => OrganizationPlazeruser, (orgUser) => orgUser.plazerUser)
  // orgUsers: OrganizationPlazeruser[];
}
