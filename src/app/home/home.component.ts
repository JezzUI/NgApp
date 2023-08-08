import { Component, OnInit } from '@angular/core';
import { Courses } from '../services/courses.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private course: Courses) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  courses = this.course.courses;



  
}
