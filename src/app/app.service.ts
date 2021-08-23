


import { Injectable } from '@angular/core';
import { EMPLOYEE } from './mock-emp';
import {HttpClient,HttpHeaders,} from '@angular/common/http'
import { Employee } from 'src/app/Employee';
import { Observable, of, } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})
export class AppService {
 // hostURL= environment.hostURL

  private apiUrl = environment.hostURL

  constructor(private http:HttpClient) { }

  getEmployee(): Observable<Employee[]> {
    // const employees = of(EMPLOYEE)
    // return employees
    // return this.http.get<Employee[]>(this.apiUrl).pipe(map((res: any)=>{
    //   return res
    // }))
   // const url = `${this.apiUrl}?page=2`
     return this.http.get<Employee[]>(this.apiUrl)
  }

  getEmployee1(page: number): Observable<Employee[]> {
    // const employees = of(EMPLOYEE)
    // return employees
    // return this.http.get<Employee[]>(this.apiUrl).pipe(map((res: any)=>{
    //   return res
    // }))
    console.log("inside get1");
    
    const url = `${this.apiUrl}?page=${page}`
    console.log(url);
    
     return this.http.get<Employee[]>(url)
  }

  deleteEmployees(employee: Employee): Observable<Employee>{
    const url = `${this.apiUrl}/${employee.id}`
    console.log(employee.id);
    return this.http.delete<Employee>(url)
  }


  addEmployee(employee: Employee): Observable<Employee>{
   // return this.http.post<Employee>(this.apiUrl, employee,HttpOptions)
   return this.http.post<Employee[]>(this.apiUrl,employee,HttpOptions).pipe(map((res: any)=>{
    return res
  }))
  }

}

