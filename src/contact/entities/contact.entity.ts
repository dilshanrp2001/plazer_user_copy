import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'contacts' })
export class Contact {
    @PrimaryGeneratedColumn()
    contactId: number;

    @Column ({type: 'text', nullable: false})
    contactNo: string;

    @Column ({name: 'userId'})
    userId: number;

    @Column ({name: 'orgId'})
    orgId: number;
}
