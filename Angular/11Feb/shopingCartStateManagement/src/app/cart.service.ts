import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

export interface Product {
    id: number;
    name: string;
    price: number;
}

@Injectable({
    providedIn: 'root'
})

export class CartService {
    private cartList = new BehaviorSubject<Product[]>([]);
    cartList$ = this.cartList.asObservable();

    addToCart(product: Product) {
        const currentCart = this.cartList.getValue();
        this.cartList.next([...currentCart, product]);
    }

    removeFromCart(product: Product) {
        const currentCart = this.cartList.getValue();
        const updatedCart = currentCart.filter(p => p !== product);
        this.cartList.next(updatedCart);
    }

    clearCart() {
        this.cartList.next([]);
    }

}