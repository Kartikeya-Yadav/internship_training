import { Injectable } from '@angular/core';

export interface FoodItem{
  id: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})

export class CartService {
  private cartItems: FoodItem[] = [];

  constructor() { }

  addToCart(foodItem: FoodItem){
    this.cartItems.push(foodItem);
    console.log(this.cartItems);
  }

  removeFromCart(foodItem: FoodItem){
    this.cartItems = this.cartItems.filter(item => item.id !== foodItem.id);
  }

  getCartItems(){
    return this.cartItems;
  }

  getTotalPrice(){
    console.log("getprice");
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}
