import { Component, OnInit } from '@angular/core';
import { CartService, Product } from '../cart.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

  cartList: Product[] = [];

  constructor(private cartService: CartService){}

  ngOnInit(){
    this.cartService.cartList$.subscribe(p => this.cartList = p);
  }

  removeFromCart(product: Product){
    this.cartService.removeFromCart(product);
  }

  clearCart(){
    this.cartService.clearCart();
  }

}
