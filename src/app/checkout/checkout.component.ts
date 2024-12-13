import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {

course;
  ngOnInit(){
this.course = history.state;
  }
}
