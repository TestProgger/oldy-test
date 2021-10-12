import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('role')
export class Role{
    
    @PrimaryGeneratedColumn()
    id !: number

    @Column('varchar')
    name !: string 

}