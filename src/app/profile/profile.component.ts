import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  // Add static data
  profileData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    imageUrl: 'https://via.placeholder.com/150',
    bio: 'User Bio',
  };

  constructor() { }

  ngOnInit(): void {
  }

}
