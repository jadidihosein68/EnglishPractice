import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlashCardService } from '../services/vocabulary.service';
import { Vocabulary } from '../model/vocabulary.model';
import { FlashCardSetService } from '../services/FlashCardSetService';
import { FlashCardSet } from '../model/flashcardset';


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


  constructor(private fb: FormBuilder, private flashcardService: FlashCardService , private _formBuilder: FormBuilder, private flashCardSetService:FlashCardSetService) {


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



  thecard :FlashCardSet  = 
    { 
      id:'',
      title: '', 
      author: '',
      imageUrl: 'https://via.placeholder.com/150',
      progress : 0,
      public:true,
      rating:1,
      flashcards:[],
      subject:""

    }


    updateCard(updatedCard: any) {
      console.log({"this.thecard":this.thecard});
      this.thecard = updatedCard;
    }
    showobject(){

    }



    next() {


      console.log({valid:this.flashcardForm.valid})
      //if (this.flashcardForm.valid) {
        this.flashCardSetService.createFlashCardSet(this.thecard).subscribe(response  => {
          console.log("Updated successfully", response);
          // Proceed to next step or any other action
        }, error  => {
          console.error("Update failed", error);
          // Handle error
        });
      //}
    }
    

}
