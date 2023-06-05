import { Component, OnInit } from '@angular/core';
import {  UserService } from '../services/user.service'; // import the UserService and UserProfile
import {  UserProfile } from '../model/userProfile'; // import the UserService and UserProfile



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileData: UserProfile | null = null;
  imageUrl = 'https://th.bing.com/th/id/OIG.EZ4GfP4I3tedkoSQZS9O?pid=ImgGn';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getMyUserProfile().subscribe(
      (data) => {
        this.profileData = data;
      },
      (error) => {
        console.error('Error fetching user profile:', error);
      }
    );
  }

}
