import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environments';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email?: string;
  password?: string;
  canShowLogin?: boolean;

  constructor() {
   }

  ngOnInit(): void {
    this.canShowLogin = !environment.production;
  }

  onSubmit(): void {
    console.log(`Email: ${this.email}, Password: ${this.password}`);
    // Add your registration logic here
  }

  registerWithFacebook(): void {
    console.log('Register with Facebook');
    // Add your Facebook registration logic here
  }

  registerWithGoogle(): void {
    console.log('Register with Google');
    // Add your Google registration logic here
  }

  registerWithHotmail(): void {
    console.log('Register with Hotmail');
    // Add your Hotmail registration logic here
  }
}
