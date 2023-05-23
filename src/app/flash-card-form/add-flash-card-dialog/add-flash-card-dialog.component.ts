import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlashCard } from '../../model/flashcard';
import { FlashCardService } from '../../services/FlashCardService';


@Component({
  selector: 'app-add-flash-card-dialog',
  templateUrl: './add-flash-card-dialog.component.html',
  styleUrls: ['./add-flash-card-dialog.component.scss']
})
export class AddFlashCardDialogComponent {

  form: FormGroup;
  action: string;
  errorMessage: string;
  constructor(
    private fb: FormBuilder,
    private flashCardService: FlashCardService,
    public dialogRef: MatDialogRef<AddFlashCardDialogComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: {flashcardsetid: string, flashCard: FlashCard}
  ) {
    this.form = this.fb.group({
      front: ['', Validators.required],
      hints: ['', Validators.required],
      back: ['', Validators.required],
      soundIsActive: [true, Validators.required],
    });


    if (data) {
      this.form.patchValue(data);
    }
    this.action = (data && data.flashCard) ? 'Edit' : 'Add';
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.form.valid) {

      if (this.action === 'Add') {

        this.form.value.flashcardSetId = this.data.flashcardsetid;
        this.flashCardService.createFlashCard(  this.data.flashcardsetid , this.form.value).subscribe(result => {
          console.log('Flash card added', result);
          this.dialogRef.close();
        });
      

        console.log("add Operation");
        console.log({data:this.data});

      }

      else {

        console.log("Edit Operation");
        console.log({data:this.data});

        /*
        this.flashCardService.updateFlashCard(this.data.id, this.form.value).subscribe(result => {
          console.log('Flash card updated', result);
          this.dialogRef.close();
        });
        */
      }

    }
    else {
      this.errorMessage = 'Please correct the form before submitting:';
      for (const field in this.form.controls) {
        if (this.form.controls[field].invalid) {
          this.errorMessage += `\n ${field} is invalid.`;
        }
      }
      console.log(this.errorMessage);
    }
  }
}
