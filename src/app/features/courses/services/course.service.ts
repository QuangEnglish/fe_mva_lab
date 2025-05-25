import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Course} from "../../../shared/utils/api-router";

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }

  getByIdCourseCard(id?: number): Observable<any> {
    return this.http.get(
      environment.BASE_API_URI.BASE_SERVICE_API + Course.getByIdCourseCard + id,
    );
  }

  getAllCourseCard(): Observable<any> {
    return this.http.get(
      environment.BASE_API_URI.BASE_SERVICE_API + Course.getAllCourseCard,
    );
  }

}
