import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  lclStr: string;
  sesStr: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.lclStr = sessionStorage.getItem("oldName");
    console.log(this.lclStr);
  }

  GoToHome() {
    this.router.navigate(['Home'], { relativeTo: this.activatedRoute })//localhost:4200/About/Home
  }

  authors = [
    {
      authorName: "Jane Doe", role: "CEO & Founder", about: "Some text that describes me lorem ipsum ipsum lorem"
      , mail: "jane@example.com", imageUrl:"assets/images/team1.jpg"
    },
    {
      authorName: "Mike Ross", role: "Art Director", about: "Some text that describes me lorem ipsum ipsum lorem"
      , mail: "mike@example.com",imageUrl:"assets/images/team2.jpg"
    },
    {
      authorName: "Steve Rogers", role: "Designer", about: "Some text that describes me lorem ipsum ipsum lorem"
      , mail: "steve@example.com",imageUrl:"assets/images/team3.jpg"
    }
  ]
}
