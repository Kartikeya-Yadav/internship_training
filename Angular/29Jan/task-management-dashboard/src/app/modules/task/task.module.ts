import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskCreateComponent } from './task-create/task-create.component';
import { TaskService } from './task.service';
import { TaskListComponent } from './task-list/task-list.component';
import { FormsModule } from '@angular/forms'
import { TaskComponent } from './task.component';


@NgModule({
  declarations: [
    TaskListComponent,
    TaskCreateComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    TaskService
  ],
  exports: [
    TaskListComponent,
    TaskCreateComponent,
    TaskComponent
  ]
})
export class TaskModule { }
