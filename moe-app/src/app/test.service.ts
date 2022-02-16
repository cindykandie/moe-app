import { Injectable } from '@angular/core';
import { IEmployee } from './interfaces';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';




@Injectable()
export class TestService2{
  private _url: string ="/assets/data/employees.json"
  constructor(private http: HttpClient){}

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url)
                    // .catch(this.errorHandler);
  }
  // errorHandler(error:HttpErrorResponse){
  //   return Observable.throw(error.message || "Server Error")
  // }
}

  

