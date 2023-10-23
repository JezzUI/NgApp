import { Component, OnInit } from '@angular/core';
import { Courses } from '../services/courses.service';
import { Observable } from 'rxjs';
import { Route, Router, Routes } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [Courses]
})
export class CoursesComponent implements OnInit{

  data$!: Observable<any>;
  isLoading: boolean = true;
  constructor(private courses:Courses, private route: Router){

  }
   course = [];
   courseApi = this.courses;
   
   ngOnInit(): void {
    this.courseApi.fetchProd().subscribe({
      next: res => {
        this.course = res;
      },
      error: error => {
        console.error('Error loading courses:', error);
      },
      complete: () => {
        this.isLoading = false; // Set loading to false when the API call is complete
      }
    });
  }
  getTotalCourses(){
    return this.course.length;
  }
  getTotalFreeCourses(){
    return this.course.filter(course => course.category.includes("clothing")).length ;
  }
  getTotalPremiumCourses(){
    return this.course.filter(course => course.category === 'jewelery').length;
  }
  getElectronics(){
    return this.course.filter(course => course.category === 'electronics').length;
  }
  getTotalRating4Courses(){
     return this.course.reduce(function(start: Array< | any>, cur){
    if(cur.rating.rate >= 4){
    start.push(cur);
    }
    return start;
    },[]).length;
  }

  courseCountRadioButton: any = 'All';
  searchText: string = '';

  onFilterRadioButtonChanged(data: string){
    if(data.includes("4")){
      this.courseCountRadioButton = "4";
    }
    else{
    this.courseCountRadioButton = data;
    }
    //console.log(this.courseCountRadioButton);
  }

  onShow(id: number){
    this.route.navigate(['/Courses/Course', id]);
  }

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    //console.log(this.searchText);
  }



}
