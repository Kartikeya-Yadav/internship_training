import { AppDataSource } from "../config/database";
import { Order } from "../entities/order";
import { OrderItem } from "../entities/orderItem";
import { Product } from "../entities/product";

// Study Query Runner.
// Query Runner to create Transaction for place order.
export const placeOrder = async function(userId: number, items: { productId: number; quantity: number }[]) {
    const queryRunner = AppDataSource.createQueryRunner();

    await queryRunner.startTransaction();
    try {
        const manager = queryRunner.manager;

        // Calculate total price
        let totalPrice = 0;
        const orderItems: OrderItem[] = [];
        for (const item of items) {
            const product = await manager.findOne(Product, { where: { id: item.productId } });
            if (!product) {
                throw new Error(`Product with ID ${item.productId} not found. !`);
            }

            const orderItem = new OrderItem();
            orderItem.product = product;
            orderItem.quantiy = item.quantity;
            orderItem.price = product.price * item.quantity;
            totalPrice += orderItem.price;

            orderItems.push(orderItem);
        }

        // Create the order
        const order = new Order();
        order.price = totalPrice;
        order.user = { id: userId } as any; 
        order.orderItems = orderItems;

        await manager.save(Order, order);

        // Save order items
        for (const orderItem of orderItems) {
            orderItem.order = order;
            await manager.save(OrderItem, orderItem);
        }

        await queryRunner.commitTransaction();
        console.log(order);
        
        return `Order Placed Successfully !` ;
    } catch (error) {
        await queryRunner.rollbackTransaction();
        throw error;
    } finally {
        await queryRunner.release();
    }
}