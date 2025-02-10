import { Component } from '@angular/core';
import { CartService, FoodItem } from '../cart.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: FoodItem[] = [];

  constructor(private cartService: CartService){}

  ngOnInit(){
    this.updateCart();
  }

  updateCart(){
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(foodItem: FoodItem){
    this.cartService.removeFromCart(foodItem);
    this.updateCart();
  }

  getTotalPrice(){
    return this.cartService.getTotalPrice();
  }
}
