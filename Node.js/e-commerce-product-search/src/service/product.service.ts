import { AppDataSource } from "../config/database";
import { Product } from "../entities/product";


export const searchProducts = async function (filters: {
    ProductName?: string;
    category?: string;
    brand?: string;
    minPrice?: number;
    maxPrice?: number;
    minCustomerRatings?: number;
    maxCustomerRatings?: number;
}) {
    const productRepository = AppDataSource.getRepository(Product);

    let queryBuilder = productRepository.createQueryBuilder("product");

    if (filters.ProductName) {
        queryBuilder = queryBuilder.andWhere("product.ProductName LIKE :ProductName", {
            ProductName: `%${filters.ProductName}%`
        });
    }
    if (filters.category) {
        queryBuilder = queryBuilder.andWhere("product.category = :category", {
            category: filters.category
        });
    }
    if (filters.brand) {
        queryBuilder = queryBuilder.andWhere("product.brand = :brand", {
            brand: filters.brand
        });
    }
    if (filters.minPrice) {
        queryBuilder = queryBuilder.andWhere("product.price >= :minPrice", {
            minPrice: filters.minPrice
        });
    }
    if (filters.maxPrice) {
        queryBuilder = queryBuilder.andWhere("product.price <= :maxPrice", {
            maxPrice: filters.maxPrice
        });
    }
    if (filters.minCustomerRatings) {
        queryBuilder = queryBuilder.andWhere("product.customerRatings >= :minCustomerRatings", {
            minCustomerRatings: filters.minCustomerRatings
        });
    }
    if (filters.maxCustomerRatings) {
        queryBuilder = queryBuilder.andWhere("product.customerRatings <= :maxCustomerRatings", {
            maxCustomerRatings: filters.maxCustomerRatings
        });
    }

    const results = await queryBuilder.getMany();
    return results;
}


