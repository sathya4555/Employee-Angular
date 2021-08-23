import { Injectable } from '@angular/core';
import { EMPLOYEE } from '../mock-emp';
import { HttpClient, HttpHeaders, } from '@angular/common/http'
import { Employee } from 'src/app/Employee';
import { Observable, of, } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppService } from '../app.service';
const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends AppService {

  getEmployee1(page: number): Observable<Employee[]> {
    return super.getEmployee1(page);
  }

  deleteEmployees(employee: Employee): Observable<Employee> {
    return super.deleteEmployees(employee)
  }


  addEmployee(employee: Employee) : Observable<Employee>{
   return super.addEmployee(employee)
  }
}

