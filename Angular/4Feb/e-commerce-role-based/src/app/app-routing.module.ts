import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/product', pathMatch: 'full'},
  {
    path: 'user',
    loadChildren: () => 
      import('./user/user.module').then(m => m.UserModule), 
  },
  {
    path: 'product',
    loadChildren: () => 
      import('./product/product.module').then(m => m.ProductModule),
  },
  {
    path: 'order',
    loadChildren: () => 
      import('./order/order.module').then(m => m.OrderModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
