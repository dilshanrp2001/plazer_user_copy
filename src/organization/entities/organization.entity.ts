import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MiniApp } from "src/mini-app/entities/mini-app.entity";
import { PlazerAdmin } from "src/plazer-admin/entities/plazer-admin.entity";
import { PlazerUser } from "src/plazer-user/entities/plazer-user.entity";

@Entity({ name: 'organization' })
export class Organization {
    @PrimaryGeneratedColumn()
    orgId: number;

    @Column({ nullable: false })
    orgName: string;

    @Column({ nullable: true })
    orgAddressL1: string;

    @Column({ nullable: true })
    orgAddressL2: string;

    @Column({ nullable: true })
    orgAddressL3: string;

    @Column({ nullable: false })
    orgEmail: string; 

    @Column({ type: 'text', nullable: true })
    WebsiteLink: string;
    
    @Column({ name:'pId' })
    pId: number;
    
    @OneToMany(()=>MiniApp, (miniApp: any)=> miniApp.organization)
    miniApps: MiniApp[];

    @ManyToOne(()=>PlazerAdmin, (plazerAdmin: any)=> plazerAdmin.organization)
    @JoinColumn({ name:'pId' })
    plazerAdmins: PlazerAdmin;

    @ManyToMany(() => PlazerUser)
    @JoinTable()
    plazerUsers: PlazerUser[];
}
