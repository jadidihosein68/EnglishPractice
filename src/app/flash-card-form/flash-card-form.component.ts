import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlashCardService } from '../services/vocabulary.service';
import { Vocabulary } from '../model/vocabulary.model';


@Component({
  selector: 'app-flash-card-form',
  templateUrl: './flash-card-form.component.html',
  styleUrls: ['./flash-card-form.component.scss']
})
export class FlashcardFormComponent implements OnInit {
  flashcardForm: FormGroup;

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;


  constructor(private fb: FormBuilder, private flashcardService: FlashCardService , private _formBuilder: FormBuilder) {


    this.flashcardForm = this.fb.group({
      setName: ['', Validators.required],
      question: ['', Validators.required],
      answer: ['', Validators.required],
      tags: [''],
      visibility: ['private', Validators.required],
    });


  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.flashcardForm.valid) {
      this.flashcardService.addFlashcard(this.flashcardForm.value).subscribe(/* handle response */);
    }
  }


  thecard = 
    { 
      name: 'John Doe', 
      bio: 'Lorem ipsum dolor sit amet.',
      imageUrl: 'https://via.placeholder.com/150',
      caption: 'Caption for image 1',
      progress: 70,
      rating: 4
    }


    updateCard(updatedCard: any) {
      console.log({"this.thecard":this.thecard});
      this.thecard = updatedCard;
    }
    showobject(){

      console.log({"this.flashcardForm.value":this.thecard} );
    }

}
