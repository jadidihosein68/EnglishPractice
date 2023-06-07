import { Component, OnInit } from '@angular/core';
import {  UserService } from '../services/user.service'; // import the UserService and UserProfile
import {  UserProfile } from '../model/userProfile'; // import the UserService and UserProfile
import { MatDialog } from '@angular/material/dialog';
import { ProfileEditModalComponent } from './profile-edit-modal/profile-edit-modal.component';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileData: UserProfile | null = null;
  imageUrl = 'https://th.bing.com/th/id/OIG.EZ4GfP4I3tedkoSQZS9O?pid=ImgGn';

  constructor(private userService: UserService , private dialog: MatDialog) { }

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


  openNicknameEdit() {
    const dialogRef = this.dialog.open(ProfileEditModalComponent, {
      data: { nickname: this.profileData?.nickname, bio: this.profileData?.bio},
    });
  
    dialogRef.afterClosed().subscribe((result: { nickname: string, bio: string }) => {
      if (result && this.profileData) {
        // If a new nickname and bio were submitted, save them.
        this.profileData.nickname = result.nickname;
        this.profileData.bio = result.bio;
      }
    });
    
  }


}
