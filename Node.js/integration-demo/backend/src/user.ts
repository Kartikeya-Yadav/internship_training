import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("User_k")
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userName: string;

    @Column()
    email: string;
    
    @Column()
    age: number;

    @Column()
    gender: string;

    @Column()
    password: string;

}