import { AppDataSource } from "../config/database"
import { Product } from "../entities/product"

export class ProductService {

    private static productRepo = AppDataSource.getRepository(Product)

    static async addProduct(product: Product) {
        await this.productRepo
            .createQueryBuilder("product")
            .insert()
            .into(Product)
            .values(product) 
            .execute();
        return "Product added Successfully!";
    }

    static async getAllProducts() {
        const result = await this.productRepo.createQueryBuilder("product").select([
            'product.id',
            'product.name',
            'product.description',
            'product.price'
        ])
            .orderBy("product.name", 'ASC')
            .getMany()
        return result
    }


}