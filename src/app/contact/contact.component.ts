import { Component, ElementRef, OnInit, Renderer2, ViewChild, resolveForwardRef } from '@angular/core';
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
  countries = [];
  response: boolean = false;
  @ViewChild("pop") popupId: ElementRef;
  @ViewChild("cont") cont: ElementRef;

  constructor(private router: Router, private http: HttpClient, private renderer: Renderer2, private ele: ElementRef) {

  }

  ngOnInit(): void {

    this.reactiveForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl(null, Validators.required),
      age: new FormControl(null),
      email: new FormControl(null, Validators.required),
      country: new FormControl(null, Validators.required),
      subject: new FormControl(null)
    })

    this.fetchInfo();
    this.getCountries();
    sessionStorage.setItem("oldName", "Rajesh");

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
  getCountries() {
    this.http.get('https://jezz-001-default-rtdb.firebaseio.com/countries/0.json').pipe(map((res) => {
      let countries = [];
      let eachCountry = [];
      for (let key in res) {
        for (let i = 0; i < res[key].countries.length; i++) {
          eachCountry.push(res[key].countries[i]);

        }
      }
      for (let i = 0; i < eachCountry.length; i++) {
        countries.push(eachCountry[i].country);
      }
      return countries;
    })).subscribe((res) => {
      //console.log(res);
      this.countries = res;
    });
  }

  onSubmit(contactInformation: { firstName: string, lastName: String, email: String, country: string, subject: string }) {

    this.submit = true;
    console.log(contactInformation)
    // console.log(contactInformation.value["firstname"])
    const headers = { headers: "Jezz" };

    this.http.post("https://jezz-001-default-rtdb.firebaseio.com/contactInfo/customer.json",
      contactInformation,
      { headers: headers }).subscribe((value) => {
        this.response = true;
        this.openModal();
      })
  }

  fetchInfo() {
    this.http.get("https://jezz-001-default-rtdb.firebaseio.com/contactInfo/customer.json").pipe(map((resp) => {
      const contactInfo = [];
      for (const key in resp) {
        if (resp.hasOwnProperty(key)) {
          const arr = resp[key];
          // console.log(arr);
          const modifiedEntry = { ...arr, id: key };
          contactInfo.push(modifiedEntry);
        }

      }
      return contactInfo;
    })).subscribe((resp) => {
      this.contactInfo = resp;
      // console.log(this.contactInfo[0].country);
      this.uniqueId = 0;
      this.reactiveForm.setValue({
        firstname: this.contactInfo[this.uniqueId].firstname,
        lastname: this.contactInfo[this.uniqueId].lastname,
        age: this.contactInfo[this.uniqueId].age,
        email: this.contactInfo[this.uniqueId].email,
        country: this.contactInfo[this.uniqueId].country,
        subject: this.contactInfo[this.uniqueId].subject
      });
    })

  }

  deleteRec(id: string) {
    console.log(this.contactInfo[0].id)
    id = this.contactInfo[0].id;
    this.http.delete("https://jezz-001-default-rtdb.firebaseio.com/contactInfo/customer/" + id + ".json").subscribe();
  }

  
  // Function to disable scrolling
  disableScroll() {
    this.renderer.addClass(document.body, 'disable-scroll');
  }

  // Function to enable scrolling
  enableScroll() {
    this.renderer.removeClass(document.body, 'disable-scroll');
  }

  // Example usage
  openModal() {
    // Open your modal or pop-up
    this.disableScroll();
  }

  closeModal() {
    // Close your modal or pop-up
    this.enableScroll();
    this.renderer.removeClass(this.cont.nativeElement, 'blurClass');
    this.renderer.addClass(this.popupId.nativeElement, 'popuphid');
  }
}



