import { Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnDestroy{

  course: any;
  courses = [];
  courseId: any;
  subs: any;
  editMode: boolean = false;
  activeSubs: any;
  isLoading: boolean = false;

   courseApi = this.service;

  constructor(private service: Courses,
     private activateroute: ActivatedRoute,
     private router: Router) { }

  ngOnInit(): void {
    // this.courseId = this.route.snapshot.params['id'];
    // //this.courseId = this.route.snapshot.params['name'];
    // this.course = this.service.courses.find(x => x.id == this.courseId);
    this.courseApi.fetchProd().subscribe({
      next: res => {
        this.course = res.find((x: { id: any; }) => x.id == this.courseId);
      },
      error: error => {
        console.error('Error loading courses:', error);
      },
      complete: () => {
        this.isLoading = false; // Set loading to false when the API call is complete
      }
    });

    this.subs= this.activateroute.paramMap.subscribe((param) =>{
      this.courseId = param.get("id");
    });

     this.activeSubs = this.activateroute.queryParamMap.subscribe((param) =>{
      this.editMode = Boolean(param.get("edit"));
    });
  }
  
  appendQuery(){
    this.router.navigate(['/Courses/Course', this.courseId],{queryParams:{edit:true}})
  }

  ngOnDestroy(){
    this.subs.unsubscribe();
    this.activeSubs.unsubscribe();

  }


}
