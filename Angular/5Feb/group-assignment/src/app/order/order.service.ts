import { Injectable } from '@angular/core';

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
export class OrderService {
 
  orderList: Product[] = [];

  constructor() { }

  //Funality for order list
  removeFromOrder(product: Product){
    this.orderList = this.orderList.filter(item => item.id !== product.id);
    // console.log('product removed from orders', this.orderList);
  }



}
