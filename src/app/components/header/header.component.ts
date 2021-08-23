import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { SuspenseProps } from 'react';
// import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'employee-management';
showAddEmployee: boolean = false
subscription: Subscription | undefined
  constructor(private uiService:UiService, ) { 
    this.subscription = this.uiService.onToggle().subscribe(value => this.showAddEmployee = value)
  }

  ngOnInit(): void {}

  toggleAddEmployee(){
   this.uiService.toggleAddTask()
  }
// hasRoute(route: string){
//   return this.router.url === route
// }

}
