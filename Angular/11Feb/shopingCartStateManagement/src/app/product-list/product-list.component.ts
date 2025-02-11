import { Component } from '@angular/core';
import { CartService, Product } from '../cart.service';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  productList: Product[] = [
    {id: 1, name: 'Laptop', price: 22230},
    {id: 2, name: 'SandBag', price: 22230},
    {id: 3, name: 'Katana', price: 22230},
    {id: 4, name: 'Mouse', price: 22230},
    {id: 5, name: 'KeyBoard', price: 22230}
  ];

  constructor(private cartService: CartService){}


  addToCart(product: Product){
    this.cartService.addToCart(product);
  }



}
