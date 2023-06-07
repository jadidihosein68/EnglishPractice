import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile-edit-modal',
  templateUrl: './profile-edit-modal.component.html',
  styleUrls: ['./profile-edit-modal.component.scss']
})
export class ProfileEditModalComponent {
  form: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<ProfileEditModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { nickname: string , bio:string },
    private userService: UserService,
  ) {
    this.form = this.formBuilder.group({
      nickname: [this.data.nickname || ''],
      bio: [this.data.bio || ''],
    });
  }





  submit() {
    if (this.form.valid) {
      const { nickname, bio } = this.form.value;
      this.userService.updateProfile(nickname, bio).subscribe(
        response => {
          // Handle success response here
          console.log(response);
          this.dialogRef.close({ nickname, bio });
        },
        error => {
          // Handle error response here
          console.log(error);
        }
      );
    }
  }







}
