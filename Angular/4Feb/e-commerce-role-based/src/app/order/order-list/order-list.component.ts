import { Component } from '@angular/core';
import { OrderService, Product } from '../order.service';

@Component({
  selector: 'app-order-list',
  standalone: false,
  
  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent {

  orderList: Product[] = [];

  constructor(private orderService: OrderService){
  }

  ngOnInit(){
    this.updateOrder();
  }

  updateOrder(){
    this.orderList = this.orderService.orderList;
  }


  removeFromOrder(product: Product){
    this.orderService.removeFromOrder(product);
    this.updateOrder();
  }

}
