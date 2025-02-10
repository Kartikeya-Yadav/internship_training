import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './order.component';
import { OrderService } from '../services/order.service';



@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    OrderService
  ],
  exports: [
    OrderComponent
  ]
})
export class OrderModule { }
