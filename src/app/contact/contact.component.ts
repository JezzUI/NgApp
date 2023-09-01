import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDeactivate } from '../canDeactivateGuard.service';
import { Observable, map } from 'rxjs';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, GlobalDeactivate {

  fName: any;
  lName: any;
  country: any;
  subject: any;
  uniqueId: any;
  submit: boolean = false;
  contactInfo = [];
  reactiveForm: FormGroup;
  newClass: string;
  show: boolean = true;
  
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {

    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
      subject: new FormControl(null)
    })

    this.fetchInfo();
sessionStorage.setItem("oldName","Rajesh");

  }

  ProcessForm() {
    //Write logic to process the form
    this.router.navigate(['About']);
  }

  canExit() {
    if (!this.submit) {
      if (this.fName || this.lName || this.country || this.subject) {
        return confirm("You have some unsaved changes, Do you really want to discard the changes?")

      }
      else {
        return true;
      }
    }
    else {
      return true;
    }
  }

  // onSubmit(tdForm: NgForm){

  //   this.submit= true;
  //   console.log(tdForm)
  //   console.log(tdForm.value['firstname'])

  // }
  onSubmit(contactInformation: { firstName: string, lastName: String, email: String, country: string, subject: string }) {

    this.submit = true;
    console.log(contactInformation)
    // console.log(contactInformation.value["firstname"])
    const headers = { headers: "Jezz" };

    this.http.post("https://jezz-001-default-rtdb.firebaseio.com/contactInformation.json",
      contactInformation,
      { headers: headers }).subscribe((value) => {
        console.log(value);
      })

  }

  fetchInfo() {
    this.http.get("https://jezz-001-default-rtdb.firebaseio.com/contactInformation.json").pipe(map((resp) => {
      const contactInfo = [];
      for (const key in resp) {
        if (resp.hasOwnProperty(key)) {
          const arr = resp[key];
          console.log(arr);
          const modifiedEntry = { ...arr, id: key };
          contactInfo.push(modifiedEntry);
        }

      }
      return contactInfo;
    })).subscribe((resp) => {
      this.contactInfo = resp;
      console.log(this.contactInfo[0].country);
      this.uniqueId=1;
      this.reactiveForm.setValue({
        firstname: this.contactInfo[this.uniqueId].firstname,
        lastname: this.contactInfo[this.uniqueId].lastname,
        email: this.contactInfo[this.uniqueId].email,
        country: this.contactInfo[this.uniqueId].country,
        subject: this.contactInfo[this.uniqueId].subject
      });
    })

  }

  deleteRec(id: string){
    console.log(this.contactInfo[0].id)
    id = this.contactInfo[0].id;
    this.http.delete("https://jezz-001-default-rtdb.firebaseio.com/contactInformation/'+id+'.json").subscribe();
  }
 
}
