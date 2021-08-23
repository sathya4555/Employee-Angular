import { Component, OnInit } from '@angular/core';
import { EMPLOYEE } from '../../mock-emp';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/Employee';
import { AppService } from 'src/app/app.service';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
value: number =1
  employees: Employee[] = EMPLOYEE

  constructor(private employeeService: AppService) { 

  }
  startpage(){
    if(this.value>=0 )
    this.value=1
  }

page(){
  if(this.value>=0 )
 this.value=this.value+1
}
page1(){
  if(this.value>=0 )
  this.value=this.value-1
 }
  ngOnInit(): void {
    this.employeeService.getEmployee1(this.value).subscribe((employees) => {
      (this.employees = employees)
    })
  }
getEmp(){
  //this.value=this.value+1
  this.employeeService.getEmployee1(this.value).subscribe((employees) => {
    (this.employees = employees)
  })
}

  deleteEmployee(employee: Employee){

  //  console.log("booo");
    
    this.employeeService.deleteEmployees(employee).subscribe(() => {
      (this.employees = this.employees.filter((t) => t.id !== employee.id))
    })
  } 

  editEmployee(employee: Employee){

     console.log("booo",employee.id);
      
       //this.employeeService.deleteEmployees(employee).subscribe(() => {
      //   (this.employees = this.employees.filter((t) => t.id !== employee.id))
      // })
    } 

  AddEmployee(employee: Employee){
    this.employeeService.addEmployee(employee).subscribe((employee) => {
      (this.employees.push(employee))
    })
    //   this.employeeService.addEmployee(employee).subscribe((employee) => {})
  }

}
