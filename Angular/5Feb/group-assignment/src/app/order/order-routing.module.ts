import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { AdminGuard } from '../auth/admin.guard';

const routes: Routes = [
    {path: '', redirectTo: 'order-list', pathMatch: 'full'},
    {path: 'order-list', component: OrderListComponent, canActivate: [AdminGuard]},
    {path: 'order-detail', component: OrderDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
