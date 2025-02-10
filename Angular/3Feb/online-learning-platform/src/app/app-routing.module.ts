import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "courses", component: CoursesComponent},
  {path: "profile", component: ProfileComponent},
  {path: "course/:id", component: CoursesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
