import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private https:HttpClient) { 
   
  }

  getListOfCourses(){
    return this.https.get("https://api.myjson.com/bins/1fq8pm");
  }

}
