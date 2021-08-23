import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Employee } from 'src/app/Employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { EMPLOYEE } from '../../mock-emp';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  value: number = 2
  employees: Employee[] = EMPLOYEE
  constructor(private service: AppService) { }

  ngOnInit(): void {
    this.service.getEmployee1(this.value).subscribe((employees) => {
      (this.employees = employees)
    })
  }

  page(){
    console.log(this.value);
    this.service.getEmployee1(this.value)
  }



}
