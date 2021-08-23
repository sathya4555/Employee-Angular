import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/Employee';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  private Socketid = environment.socketID
  private addUrl = environment.addUrl
  @Output() onAddEmployee: EventEmitter<Employee> = new EventEmitter()
  name!: string;
  showAddEmployee!: boolean
  subscription: Subscription


  constructor(private uiservice: UiService) {

    this.subscription = this.uiservice.onToggle().subscribe(value => this.showAddEmployee = value)

  }




  ngOnInit(): void {
  }
  onSubmit() {
    if (!this.name) {
      alert('Please add employee name')
    }
    else {
      alert('Name added!')
    }


    const newEmployee = {
      name: this.name
    }


    this.onAddEmployee.emit(newEmployee)

    this.name = ""
  }

  getInputValue() {
    console.log("inside getinputval;ue")
    // Selecting the input element and get its value 
    var postUrl = this.addUrl
    // var postBody = "'token': 'sathya'";
    var postBody = `{"name":"${this.name}"}`

    console.log(postBody);
    var str = JSON.parse(postBody);





    // function uuidv4() {
    //     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    //         var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    //         return v.toString(16);
    //     });

    // }

    // var dict_to_store_all_requests = [];
    var sio = sessionStorage.getItem('socket_id')
    let socket_id = sio;
    // let request_guid = uuidv4();
    // dict_to_store_all_requests.push(request);

    str.SocketId = socket_id,
      // str.RequestGuid = request.request_guid



      //address of api gateway running on your localhost at port 4000  (iot-microservice 4001)

      fetch(postUrl, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(str)

      })

        .then(response => response.json())
        .then(json => console.log(json))
  }

}
