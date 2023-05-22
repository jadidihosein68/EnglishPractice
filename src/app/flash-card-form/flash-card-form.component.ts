import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlashCardService } from '../services/vocabulary.service';
import { FlashCardSetService } from '../services/FlashCardSetService';
import { FlashCardSet } from '../model/flashcardset';

import { ActivatedRoute } from '@angular/router';

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


  constructor(
    private fb: FormBuilder,
    private flashcardService: FlashCardService,
    private _formBuilder: FormBuilder,
    private flashCardSetService: FlashCardSetService,
    private router: ActivatedRoute
    ) {


    this.flashcardForm = this.fb.group({
      setName: ['', Validators.required],
      question: ['', Validators.required],
      answer: ['', Validators.required],
      tags: [''],
      visibility: ['private', Validators.required],
    });


  }

  ngOnInit() { 
    const cardId = this.router.snapshot.paramMap.get('id'); 
  
    if (cardId) {
      // If cardId is not null, fetch the existing record
      this.flashCardSetService.getFlashCardSet(cardId).subscribe(response => {
        console.log("Card Retrieved successfully", response);
        // Assuming response is the data you need, assign it to 'thecard'
        this.thecard = response;
      }, error => {
        console.error("Failed to retrieve card", error);
      });
    } else {
      // If cardId is null, proceed with creation
      console.log("No cardId provided. Proceeding with creation.");
    }
  }
  



  thecard: FlashCardSet =
    {
      _id: '',
      title: '',
      author: '',
      imageUrl: 'https://via.placeholder.com/150',
      progress: 0,
      public: true,
      rating: 1,
      flashcards: [],
      subject: ""

    }


  updateCard(updatedCard: any) {
    console.log({ "this.thecard": this.thecard });
    this.thecard = updatedCard;
  }
  showobject() {

  }



  next() {


    console.log({ valid: this.flashcardForm.valid })

    this.flashCardSetService.createFlashCardSet(this.thecard).subscribe(response => {
      console.log("Updated successfully", response);

    }, error => {
      console.error("Update failed", error);

    });

  }


}
