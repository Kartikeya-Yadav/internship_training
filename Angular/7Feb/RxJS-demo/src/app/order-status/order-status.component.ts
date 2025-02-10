import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-order-status',
  standalone: false,
  templateUrl: './order-status.component.html',
  styleUrl: './order-status.component.css'
})
export class OrderStatusComponent {

  orderStatusObservable = new Observable<string>;

  subscription: any;
  viewStatus: string = '';
  completeFlag = false;

  customerObserver = {
    next: (status: string) => {
      this.viewStatus = status;
      console.log('Order Status: ', status);
    },

    errror: (err: any) => console.error("Error: ", err),

    complete: () => {
      this.completeFlag = true;
      console.log('Order Tracking Complete')
    }
  };

  ngOnInit() {
    this.orderStatusObservable = new Observable<string>(observer => {
      observer.next('Order Placed');
      setTimeout(() => observer.next('Order Shiped'), 2000);
      setTimeout(() => observer.next('Out for Delivery'), 4000);
      setTimeout(() => observer.next('Deliveried'), 6000);
      setTimeout(() => observer.complete(), 6000);
    });

    this.subscription = this.orderStatusObservable.subscribe(this.customerObserver);


    // setTimeout(() => {
    //   this.subscription.unsubscribe();
    //   console.log('Unsubscribed . . . ');
      
    // }, 3000);
  }

  unsub(){
    this.subscription.unsubscribe();
    console.log('Unsubscribed . . . ');
  }

}
