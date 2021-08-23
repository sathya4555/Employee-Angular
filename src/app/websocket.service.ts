import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import * as io from 'socket.io-client';
// import { Server } from "socket.io";
import { io } from 'socket.io-client';
import { Dictionary } from "dictionaryjs";
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  socket = io('https://localhost:4000');
  request_guid: string;
  socket_id!: string;
  // request_guid: string;
  // readonly io = new Server();
  //socket:any
  readonly uri: string = "http://localhost:3000"
  readonly uri1: string = "http://localhost:4000"
  socket1: any;


  constructor() {
    console.log('inside cons of websockets');

    //FIRST ACTION hapens wheN the page opens firSt time , this is one time activity 
    this.socket.on('connection', function (socket: any) {
      console.log('socket has been connected');
      console.log(socket)
    });

    //Thi seven Is caLled whEn  the server sends the data back to the client
    this.socket.on('successResponseFromServer', function (data: any) {
      //evalaute the requestGuid from the dictionary and then match and then show themessgae in console
      console.log(data);
      alert(`${data.name} is processed and socket id is ${data.SocketId}`)
      //for find you can use 'Filter' 
      //remove the item from the dictionary /array
    });

    //this is the event which is called when the server register the socket id and sends back the socket id
    this.socket.on('socketIdFromServer', function (data: any) {
      console.log(data)
      sessionStorage.setItem('socket_id', data.socket_id);
    });

    this.request_guid = this.uuidv4();
  }




  listen(eventname: string) {
    return new Observable((subscriber) => {
      this.socket.on('socketId', (data: any) => {
        subscriber.next(data)
        //   sessionStorage.setItem('socket_id', data.socket_id);
        console.log("Session socket idff");

      })
    })
  }

  listen1(eventname: string) {
    return new Observable((subscriber) => {
      this.socket.on('socketId', (data: any) => {
        subscriber.next(data)
        //   sessionStorage.setItem('socket_id', data.socket_id);
        console.log("Session socket idff");

      })
    })
  }

  emit(eventname: string, data: string) {
    this.socket.emit(eventname, data)
    sessionStorage.setItem('socket_id', data)
    console.log(data);

  }

  // socket.on('socketIdFromServer', function (data: { socket_id: string; }) {
  //   console.log(data)
  //   sessionStorage.setItem('socket_id', data.socket_id);
  //   localStorage.setItem('socket_id', data.socket_id);
  //   const bc = new BroadcastChannel("dcode")
  //   bc.addEventListener("message",e =>{
  // console.log("socketidindex",e);
  // //  this.webSocketService.emit('test event',e)

  // })
  //   bc.postMessage("krishna")

  //  console.log("sathyadata socket")
  // });

uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });

  }


}

