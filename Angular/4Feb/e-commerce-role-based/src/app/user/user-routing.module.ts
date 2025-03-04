import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { CustomerGuard } from '../auth/customer.guard';

const routes: Routes = [
    {path: '', redirectTo: 'register', pathMatch: 'full'},
    {path: 'login', component:LoginComponent},
    {path: 'register', component:RegisterComponent},
    {path: 'profile', component:ProfileComponent, canActivate: [CustomerGuard]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
