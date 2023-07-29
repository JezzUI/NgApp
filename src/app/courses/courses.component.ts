import { Component } from '@angular/core';
import { Courses } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent{
  
   courses = new Courses();
   course = this.courses.courses;

  getTotalCourses(){
    return this.course.length;
  }
  getTotalFreeCourses(){
    return this.course.filter(course => course.type === 'Free').length ;
  }
  getTotalPremiumCourses(){
    return this.course.filter(course => course.type === 'Premium').length;
  }
  getTotalRating4Courses(){
     return this.course.reduce(function(start: Array< | any>, cur){
    if(cur.ratings > 4){
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

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    //console.log(this.searchText);
  }



}
