import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Profile } from "./profile";
import { Order } from "./order";

@Entity("user_")
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string

    @Column()
    password: string

    @OneToOne(() => Profile, {cascade: true})
    @JoinColumn()
    profile: Profile

    @OneToMany(() => Order, (orders) => orders.user)
    orders: Order[];
}
