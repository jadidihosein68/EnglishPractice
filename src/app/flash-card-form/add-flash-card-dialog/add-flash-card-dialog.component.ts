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
    @Optional() @Inject(MAT_DIALOG_DATA) public data: {flashcardsetid: string, FlashCard: FlashCard}
  ) {
    this.form = this.fb.group({
      front: [data && data.FlashCard ? data.FlashCard.front : '', Validators.required],
      hints: [data && data.FlashCard ? data.FlashCard.hints : '', Validators.required],
      back: [data && data.FlashCard ? data.FlashCard.back : '', Validators.required],
      soundIsActive: [data && data.FlashCard ? data.FlashCard.soundIsActive : true, Validators.required],
    });
    


    if (data && data.FlashCard) {
      this.form.patchValue(data);
    }


    console.log({dialogform:data});

    this.action = (data && data.FlashCard) ? 'Edit' : 'Add';
  }

  close(): void {
    this.dialogRef.close();
  }

  save(): void {
    if (this.form.valid) {

      if (this.action === 'Add') {
        this.form.value.flashcardSetId = this.data.flashcardsetid;
        this.flashCardService.createFlashCard(  this.data.flashcardsetid , this.form.value).subscribe(result => {
        this.dialogRef.close(result.flashcards[result.flashcards.length - 1] );
        });
      }
      else {
        this.flashCardService.updateFlashCard(this.data.flashcardsetid,this.data.FlashCard._id, this.form.value).subscribe(result => {
        this.dialogRef.close(result);
        });
        
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
