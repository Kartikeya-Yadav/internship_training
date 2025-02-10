import { Injectable } from '@angular/core';
import { OrderService } from '../order/order.service';

export interface Product{
  id: number;
  name: string;
  // des: string;
  // img: string;
  price: number
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productList: Product[] = [
    {id: 1, name: 'laptop', price: 200},
    {id: 2, name: 'mouse', price: 20},
    {id: 3, name: 'Board', price: 100},
    {id: 4, name: 'Bag', price: 50},
    {id: 5, name: 'AC', price: 200},
  ];

  cartList: Product[] = [];

  constructor(private orderService: OrderService ) { }

    //Funality for product list
    addToCart(product: Product){
      console.log('Added to cartList');
      this.cartList.push(product);
      
    }
  
    placeOrder(product: Product){
      console.log('Added to order');
      this.orderService.orderList.push(product);
    }

    removeFromCart(product: Product){
      this.cartList = this.cartList.filter(item => item.id !== product.id)
      console.log('product removed from cart');
      
    }

    getTotalAmount(){
      return this.cartList.reduce((total, item) => total + item.price, 0);
    }


}
