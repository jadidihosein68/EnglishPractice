import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-flash-card-dialog',
  templateUrl: './add-flash-card-dialog.component.html',
  styleUrls: ['./add-flash-card-dialog.component.scss']
})
export class AddFlashCardDialogComponent {

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddFlashCardDialogComponent>
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      progress: ['', Validators.required],
      name: ['', Validators.required],
      fruit: ['', Validators.required],
    });
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
