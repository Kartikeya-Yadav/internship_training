import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductRoutingModule } from './product-routing.module';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule
  ]
})
export class ProductModule { }
