import { Component, Input, Output, EventEmitter } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order',
  standalone: false,
  
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent {
  @Input() name = '';

  @Input() id = 0;

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value: string) {
    console.log('button clicked in child');
    this.newItemEvent.emit(value);

  }

}
