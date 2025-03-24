import { AppDataSource } from "../config/database";
import { Order } from "../entities/order";

export class OrderService{
    private static orderRepository = AppDataSource.getRepository(Order);

    static async addOrder(order: Order){
        await this.orderRepository.createQueryBuilder("order")
            .insert()
            .into(Order)
            .values(order)
            .execute();
        return "Order added Successfully !";
    }
}