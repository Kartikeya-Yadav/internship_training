import { Component } from '@angular/core';
import { Task, TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  standalone: false,
  
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  
  tasks: Task[] =[];
  newStatus: "Pending" | "In Progress" | "Completed" = "Pending";
  
  constructor(private taskService: TaskService){
    this.tasks = this.taskService.getTasks();
  }
  
  updateTaskStatus(task: Task, status: "Pending" | "In Progress" | "Completed"){
    this.taskService.updateTaskStatus(task, status)
  }

  removeTask(task: Task){
    this.taskService.removeTask(task);
    this.tasks = this.taskService.getTasks();
  }



  
}
