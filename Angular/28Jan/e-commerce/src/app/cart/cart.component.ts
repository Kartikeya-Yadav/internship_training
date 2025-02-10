import { Component } from '@angular/core';
import { CartService, Item } from '../cart.service';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  cartItems: Item[] = [];

  constructor(private cartService: CartService){}

  ngOnInit(){
    this.updateCart();
  }

  updateCart(){
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(item: Item){
    this.cartService.removeFromCart(item);
    this.updateCart();
  }

  getTotalPrice(){
    return this.cartService.getTotalPrice();
  }
}
