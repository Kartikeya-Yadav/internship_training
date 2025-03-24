import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";
import { OrderItem } from "./orderItem";

@Entity("order_")
export class Order {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number;

    @ManyToOne(() => User, (user) => user.orders)
    user: User

    @OneToMany(()=> OrderItem, (orderItems)=> orderItems.order)
    orderItems: OrderItem[];

}