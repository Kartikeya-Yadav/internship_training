import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Student } from "./student";

@Entity("courses_K")
export class Course{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    duration: number;
    
    @ManyToMany(()=> Student, (student) => student.courses)
    students: Student[]
}