import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("student_TypeOrmDemo")
export class Student {

    @PrimaryColumn()
    rollNo: number;

    @Column()
    name: string;

    @Column()
    class: string;

}