import { Component, OnInit } from '@angular/core';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebsocketService } from './websocket.service';
import { io } from 'socket.io-client';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedin: boolean=false;  
  readonly uri: string = "http://localhost:4000"
  socket:any
  constructor(
    private formBuilder: FormBuilder, 
    private socialAuthService: SocialAuthService,
    private webSocketService: WebsocketService
  ) {
   
   }

  ngOnInit() {

   // this.webSocketService.emit('test event',"Somedata")
    this.webSocketService.listen('socketId').subscribe((data: any) =>{
      console.log("Socket ID",data);
      sessionStorage.setItem('socket_id',data)
    })

      // this.webSocketService.emit('test event',"Somedata")
      this.webSocketService.listen1('socketId11').subscribe((data: any) =>{
        console.log("Socket ID",data);
        sessionStorage.setItem('socket_id111',data)
      })
  




    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });    
    
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedin = (user != null);
      console.log(this.socialUser);
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }
}
