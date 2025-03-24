import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("product_k")
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ProductName: string;

    @Column()
    category: string;

    @Column()
    brand: string;

    @Column()
    price: number;

    @Column()
    customerRatings: number;
}