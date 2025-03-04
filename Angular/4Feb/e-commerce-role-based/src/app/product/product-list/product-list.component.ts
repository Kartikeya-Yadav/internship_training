import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  standalone: false,

  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];

  searchProduct: string = '';

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productList = this.productService.productList;
  }

  addToCart(product: Product) {
    console.log('Add to cart');
    this.productService.addToCart(product);

  }

  placeOrder(product: Product) {
    console.log('order placed');
    this.productService.placeOrder(product);
  }

  onSearchChange(searchProduct: string) {
    if (searchProduct) {
      this.productList = this.productService.productList.filter(product =>
        product.name.toLowerCase().includes(searchProduct.toLowerCase())
      );
    } else {
      this.productList = this.productService.productList;
    }
  }
}
