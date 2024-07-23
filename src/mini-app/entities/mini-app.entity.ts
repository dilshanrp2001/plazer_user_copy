import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn  } from "typeorm";
import { Organization } from "../../organization/entities/organization.entity";
import { PlazerUser } from "src/plazer-user/entities/plazer-user.entity";

@Entity({ name: 'miniApps' })
export class MiniApp {
    @PrimaryGeneratedColumn()
    appId: number;

    @Column ({ nullable: false })
    appTitle: string;

    @Column ({ type: 'text', nullable: true})
    repoLink: string;

    @Column ({ nullable: false })
    catagory: string;

    @Column ({ type: 'enum', enum: ['public', 'private'], nullable: false })
    status: string; 
    
    @CreateDateColumn({ name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @Column ({type: 'text', nullable: true})
    description: string;
  
    @Column({ default: true })
    isEnabled: boolean;

    @Column ({ nullable: false, name:'orgId'})
    orgId: number;

    @ManyToOne(()=> Organization, (organization: any)=> organization.miniApp)
    @JoinColumn({ name:'orgId' })
    organizations: Organization;

    @ManyToMany(() => PlazerUser)
    @JoinTable()
    plazerUsers: PlazerUser[];

}

