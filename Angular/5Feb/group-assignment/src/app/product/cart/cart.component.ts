import { Component } from '@angular/core';
import { Product, ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  cartList: Product[] =[];

  constructor(private productService: ProductService){}

  ngOnInit(){
    this.updateCart();
  }

  updateCart(){
    this.cartList = this.productService.cartList;
  }
  
  removeFromCart(product: Product){
    console.log('Add to cart');
    this.productService.removeFromCart(product);
    this.updateCart();
  }

  placeOrder(product: Product){
    console.log('order placed');
    this.productService.placeOrder(product);
    this.productService.removeFromCart(product);
    this.updateCart();
  }

  getTotalAmount(){
    return this.productService.getTotalAmount();
  }

}
