import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/services/auth.service';



@Component({
  selector: 'login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class loginComponent  {
  constructor(private authService: AuthService){}

login(){

  console.log("login");
  this.authService.login();
}


logout(){

  console.log("logout");
  this.authService.logout();
}



}