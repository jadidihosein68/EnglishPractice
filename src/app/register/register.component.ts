import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  email?: string;
  password?: string;

  constructor() { }

  ngOnInit(): void {
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
