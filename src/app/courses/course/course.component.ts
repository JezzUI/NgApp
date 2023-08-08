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
  courseId: any;
  subs: any;
  editMode: boolean = false;
  activeSubs: any;

  constructor(private service: Courses,
     private activateroute: ActivatedRoute,
     private router: Router) { }

  ngOnInit(): void {
    // this.courseId = this.route.snapshot.params['id'];
    // //this.courseId = this.route.snapshot.params['name'];
    // this.course = this.service.courses.find(x => x.id == this.courseId);

    this.subs= this.activateroute.paramMap.subscribe((param) =>{
      this.courseId = param.get("id");
      this.course = this.service.courses.find(x => x.id == this.courseId);
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
