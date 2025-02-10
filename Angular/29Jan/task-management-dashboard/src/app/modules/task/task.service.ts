import { Injectable } from '@angular/core';

export interface Task{
  id: number;
  name: string;
  status: "Pending" | "In Progress" | "Completed";
  priority: "High" | "Medium" | "Low"
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [];

  constructor() { }

  getTasks(){
    return this.tasks;
  }

  addTask(task: Task){
    console.log("task added");
    this.tasks.push(task);
    console.log(this.tasks);
    
  }


  updateTaskStatus(task: Task, status: "Pending" | "In Progress" | "Completed"){
    const index = this.tasks.indexOf(task);
    if(index !== -1){
        task.status = status;
        this.tasks[index] = task;
    }
  }

  removeTask(task: Task){
    this.tasks = this.tasks.filter(item => item.name !== task.name);
    // return this.tasks;
  }


}
