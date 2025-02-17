import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './profile/profile.component';
import { authGuard } from './guards/auth.guard';


const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'login', component: LoginComponent},
  {path: 'edit-profile', component: EditProfileComponent, canActivate: [authGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [authGuard]},
  {path: 'profile/:name', component: ProfileComponent, canActivate: [authGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
