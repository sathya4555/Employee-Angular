import { Injectable } from '@angular/core';
import { Observable,Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddEmployee: boolean = false
  private subject = new Subject<any>()
  constructor() { }

  toggleAddTask(): void {
    console.log(1234);
    
    this.showAddEmployee = !this.showAddEmployee
    this.subject.next(this.showAddEmployee)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable()
  }

}
