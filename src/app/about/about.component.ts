import { Component, OnInit } from '@angular/core';
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

  GoToHome(){
    this.router.navigate(['Home'], {relativeTo: this.activatedRoute})//localhost:4200/About/Home
  }
}
