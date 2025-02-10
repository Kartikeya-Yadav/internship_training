import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-food-list',
  imports: [],
  templateUrl: './food-list.component.html',
  styleUrl: './food-list.component.css'
})
export class FoodListComponent {
  foodItems = [
    {id: 1, name: "Dosa", price: 24}, 
    {id: 2, name: "Vada Pav", price: 20}, 
    {id: 3, name: "Misal Pav", price: 30},
    {id: 4, name: "Biryani", price: 80},
    {id: 5, name: "Dal Bati", price: 50}
  ];
  
  constructor(private cartService: CartService){}

  addToCart(foodTtem: any){
    this.cartService.addToCart(foodTtem);
  }

}
