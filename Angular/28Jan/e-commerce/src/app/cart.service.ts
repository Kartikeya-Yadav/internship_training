import { Injectable } from '@angular/core';

export interface Item{
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cartItems: Item[] = [];

  constructor() { }

  addToCart(item: Item){
    this.cartItems.push(item);
    console.log(this.cartItems);
  }

  removeFromCart(item: Item){
    this.cartItems = this.cartItems.filter(item => item.id !== item.id);
  }

  getCartItems(){
    return this.cartItems;
  }

  getTotalPrice(){
    console.log("getprice");
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}
