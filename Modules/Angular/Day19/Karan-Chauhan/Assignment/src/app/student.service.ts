import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, ObservedValuesFromArray } from 'rxjs';
import {Student} from '../app/Model/StudentInterface'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url:string="https://localhost:44349/api/StudentAdmission";
  constructor(private http:HttpClient) { }

  httpoption={
    headers: new HttpHeaders({'Content-Type':'application/json'})
  }

  getStudents():Observable<Student[]>
  {
    return this.http.get<Student[]>(this.url);
  }

  InsertStudent(student:Student):Observable<Student>
  {
    return this.http.post<Student>(this.url,student,this.httpoption);
  }

  UpdateStudent(student:any):Observable<any>
  {
    return this,this.http.put(this.url+`/${student.StudentId}`,student, this.httpoption);
  }

  DeleteStudent(id:number):Observable<Student>
  {
    return this.http.delete<Student>(this.url+`/${id}`,this.httpoption);
  }

}
