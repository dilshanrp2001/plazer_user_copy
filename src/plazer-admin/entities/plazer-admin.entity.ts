import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Organization } from "src/organization/entities/organization.entity";

@Entity({ name: 'plazerAdmin' })
export class PlazerAdmin {
    @PrimaryGeneratedColumn()
    pId: number;

    @Column ({type: 'text', nullable: false})
    pUserName: string;

    @Column ({type: 'text', nullable: false})
    pPassword: string;

    @OneToMany(()=>Organization, (organization: any)=> organization.plazerAdmin)
    organizations: Organization[];
}
