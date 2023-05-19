import { Component,Inject, Optional } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA  } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlashCard } from '../../model/flashcard';


@Component({
  selector: 'app-add-flash-card-dialog',
  templateUrl: './add-flash-card-dialog.component.html',
  styleUrls: ['./add-flash-card-dialog.component.scss']
})
export class AddFlashCardDialogComponent {

  form: FormGroup;
  action: string;
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddFlashCardDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: FlashCard
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      Front: ['', Validators.required],
      Hint: ['', Validators.required],
      Back: ['', Validators.required],
    });


    if (data) {  // If data exists, it means the dialog is for editing
      this.form.patchValue(data);
    }
    this.action = (data) ? 'Edit' : 'Add'; 
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
}
