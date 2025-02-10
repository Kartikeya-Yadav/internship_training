import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { interval, Observable, Subject, Subscription, map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, BrowserModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RxJS-demo2';

  // stockPrice: number | undefined;

  // fetchStockPrice(){
  //   this.getStockPrice().subscribe(price => {
  //     this.stockPrice = price;
  //     console.log('New stock price fetched: ', price);
  //   });
  // }

  // getStockPrice(): Observable<number> {
  //   return new Observable(observer => {
  //     const price = (Math.random() * 1000).toFixed(2);

  //     observer.next(parseFloat(price));
  //     observer.complete();
  //   });
  // }

  private stockPriceSubject = new Subject<number>();
  // subscription: Subscription | undefined ;
  subList: any[] = [];
  latastPrice: number | null = null;

  constructor(){
    interval(2000) 
    .pipe(map(() => (Math.random() * 1000).toFixed(2)))
    .subscribe(price => {
      console.log('New stock price:', price);
      this.stockPriceSubject.next(parseFloat(price))
    });
  }

  subScribeToStockUpdate(){
    let subscription: Subscription | undefined;
    subscription = this.stockPriceSubject.subscribe(price => {
      this.latastPrice = price;
      console.log('Recived stock price:', price);
    });
    this.subList.push({sub: subscription})
  }

  unsubScribeToStockUpdate(subscription: Subscription | undefined){
    subscription?.unsubscribe();
    console.log('Unscribed from stock updates');
    this.subList.pop();
  }

  // ngOnDestroy(){
  //   this.unsubScribeToStockUpdate(subscription);
  // }

}
