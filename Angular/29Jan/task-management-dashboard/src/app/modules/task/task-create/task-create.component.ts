import { Component } from '@angular/core';
import { TaskService, Task } from '../task.service';


@Component({
  selector: 'app-task-create',
  standalone: false,
  
  templateUrl: './task-create.component.html',
  styleUrl: './task-create.component.css'
})
export class TaskCreateComponent {

  name: string ='';
  status: "Pending" | "In Progress" | "Completed" = "Pending";
  priority:"High" | "Medium" | "Low" ="Low";

  constructor(private taskService: TaskService){}

  addTask(){
    let newTask: Task = {id: 0, name:this.name, status: this.status, priority: this.priority}
    console.log("task add...");
    this.taskService.addTask(newTask);
  } 
  
  

}
