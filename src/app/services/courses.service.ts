import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, delay, map } from "rxjs";
import { Course } from "../courses/course";

@Injectable({ providedIn: "root" })
export class Courses {
  courses = [];
  apiUrl = "https://jezz-001-default-rtdb.firebaseio.com/products/products.json";

  constructor() {
  }
  http = inject(HttpClient);
  fetchProd(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  //   .pipe(
  //     delay(5000) // Delay the response by 5 seconds
  // );
}

  // fetchProd() {
  //   this.http.get("https://fakestoreapi.com/products").pipe(map((resp) => {
  //     const contactInfo = [];
  //     for (const key in resp) {
  //       if (resp.hasOwnProperty(key)) {
  //         const arr = resp[key];
  //         const modifiedEntry = { ...arr, id: key };
  //         contactInfo.push(modifiedEntry);
  //       }

  //     }
  //     return contactInfo;
  //   })).subscribe((resp) =>{
  //     this.courses = resp;
  //     console.log(this.courses);
  //   })

  // 
}