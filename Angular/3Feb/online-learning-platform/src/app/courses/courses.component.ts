import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-courses',
  standalone: false,
  
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses = [
    { courseId: 1, name: "Angular" },
    { courseId: 2, name: "TypeScript" },
    { courseId: 3, name: "Node.js" },
    { courseId: 4, name: "JavaScript" }
  ]
  result = this.courses;
  courseId = 0;
  constructor(private route: ActivatedRoute){}

  ngOnInit(){
    this.courseId = Number(this.route.snapshot.paramMap.get('id'));
    this.result = this.courses.filter(item => item.courseId == this.courseId)
  }

}
