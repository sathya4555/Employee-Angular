import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { Employee } from '../../Employee';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { EMPLOYEE } from '../../mock-emp';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-employee-item',
  templateUrl: './employee-item.component.html',
  styleUrls: ['./employee-item.component.css']
})
export class EmployeeItemComponent implements OnInit {
  private Socketid = environment.socketID
  private deleteUrl= environment.deleteUrl
  employees: Employee[] = EMPLOYEE
  id!: number
  @Input() employee!: Employee; 
  @Output() OnDeleteEmployee: EventEmitter<Employee> = new EventEmitter();
  @Output() OnEditEmployee: EventEmitter<Employee> = new EventEmitter();
  constructor() { }
  faTimes = faTimes
  ngOnInit(): void {
  }

  onDelete(employee: Employee) {
   console.log(employee);
  this.OnDeleteEmployee.emit(employee)
  
  }

  OnEdit(employee: Employee){
    this.OnEditEmployee.emit(employee)
  }


  
getInputValue2(employee: Employee) {
 // this.OnDeleteEmployee.emit(employee)
  // Selecting the input element and get its value 
  var postUrl = this.deleteUrl+employee.id;
  console.log("deleteUrl== ",postUrl);
  
  var postBody = `{"id":"${employee.id}"}`
  this.OnDeleteEmployee.emit(employee)
  console.log(employee.id);
  var str = JSON.parse(postBody);
console.log("str",str)
  // function uuidv4() {
  //     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
  //         var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
  //         return v.toString(16);
  //     });

  // }

  // class Request {
  //     constructor() {
  //         this.request_guid = '';
  //         this.socket_id = '';
  //     }
  // }
 // var dict_to_store_all_requests = [];
 // var request = new Request();
// socket_id = sessionStorage.getItem('socket_id');
 // request.request_guid = uuidv4();
 // dict_to_store_all_requests.push(request);

 // str.SocketId = request.socket_id,
    //  str.RequestGuid = request.request_guid
     var sio = sessionStorage.getItem('socket_id')
     let socket_id = sio;
    //let socket_id = this.Socketid;
    str.SocketId = socket_id,
  //address of api gateway running on your localhost at port 4000  (iot-microservice 4001)

  fetch(postUrl, {
      method: 'DELETE',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(str)
  })

      .then(response => response.json())
      .then(json => console.log(json))
}



}
