
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("Profile_K")
export class Profile {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name : string
}