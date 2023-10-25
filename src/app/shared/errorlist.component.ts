import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-errorlist',
  templateUrl: './errorlist.component.html',
  styleUrls: ['./errorlist.component.css']
})
export class ErrorlistComponent  {

  errorList= [];

  @Input() set errors(errorList: { error: { errors: { [x: string]: any; }; }; }) {
    this.errorList = errorList
      ? Object.keys(errorList.error.errors).map(
          (key) => `${key} ${errorList.error.errors[key]}`
        )
      : [];
  }

  

}
