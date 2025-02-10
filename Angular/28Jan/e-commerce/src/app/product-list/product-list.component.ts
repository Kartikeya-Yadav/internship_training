import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    {id: 1, name: "Laptop", price: 24}, 
    {id: 2, name: "T Shirt", price: 20}, 
    {id: 3, name: "Mouse", price: 30},
    {id: 4, name: "Hand Bag", price: 80},
    {id: 5, name: "Key Board", price: 50}
  ];
  
  constructor(private cartService: CartService){}

  addToCart(item: any){
    this.cartService.addToCart(item);
  }


}
