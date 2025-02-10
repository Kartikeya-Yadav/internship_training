import { Injectable } from '@angular/core';

interface Order{
  orderId: number;
  orderName: string;
  amount: number;
}

@Injectable()
export class OrderService {
  orders: Order[] = [];

  constructor() { }

  addOrder(order: Order){
    this.orders.push(order);
  }

  removeOrder(order: Order){
    return this.orders.filter(element => element.orderId !== order.orderId);
  }
  
  // getPrice(){
  //   return this.orders.reduce( );
  // }
}
