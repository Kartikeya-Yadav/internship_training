
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Feedback{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userName: string;

    @Column()
    email: string;

    @Column("text")
    message: string;

    @Column()
    rating: number;

}