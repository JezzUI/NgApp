import { Component, OnInit   } from '@angular/core';
import { Courses } from '../services/courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  constructor(private courses:Courses){
  }
   course = [];
   courseApi = this.courses;
   isLoading: boolean = true;
   
 ngOnInit(): void {
  this.courseApi.fetchProd().subscribe(
    {next: (res)=>{
    this.course = res;
  },
  error:(error) => {
    console.error('Error loading courses:', error);
  },
  complete:() => {
    this.isLoading = false; // Set loading to false when the API call is complete
  }});
}

  
}
