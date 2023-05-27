import { Component, OnInit, ViewChild } from '@angular/core';
import { FlashCardService } from '../services/vocabulary.service';
import { FlashCardSetService } from '../services/FlashCardSetService';
import { FlashCardSet } from '../model/flashcardset';
import { CreateFlashCardSetDTO } from '../model/DTO/flashcardsetDTO';
import { ActivatedRoute, Router } from '@angular/router';
import { MatStepper } from '@angular/material/stepper';



@Component({
  selector: 'app-flash-card-form',
  templateUrl: './flash-card-form.component.html',
  styleUrls: ['./flash-card-form.component.scss']
})
export class FlashcardFormComponent implements OnInit {
  @ViewChild('stepper') stepper: MatStepper;
  isLinear = false;
  cardId: any;
  constructor(
    private flashcardService: FlashCardService,
    private flashCardSetService: FlashCardSetService,
    private router: ActivatedRoute,
    private thRouter: Router
  ) { }

  ngOnInit() {
    this.cardId = this.router.snapshot.paramMap.get('id');

    if (this.cardId) {
      this.flashCardSetService.getFlashCardSet(this.cardId).subscribe(response => {
        console.log("Card Retrieved successfully", response);
        this.thecard = response;
      }, error => {
        console.error("Failed to retrieve card", error);
      });
    } else {
      console.log("No cardId provided. Proceeding with creation.");
    }
  }

  thecard: FlashCardSet = {
    _id: '',
    title: '',
    author: '',
    imageUrl: 'https://via.placeholder.com/150',
    progress: 0,
    ispublic: true,
    rating: 5,
    flashcards: [],
    subject: "",
    status: ''
  }

  updateCard(updatedCard: any) {
    console.log({ "this.thecard": this.thecard });
    this.thecard = updatedCard;
  }

  saveFlashCardSet() {

    if (this.cardId) {
      this.flashCardSetService.updateFlashCardSet(this.cardId, new CreateFlashCardSetDTO(this.thecard)).subscribe(response => {
        console.log("Updated successfully", response);
      }, error => {
        console.error("Update failed", error);
      });
    }

    else {

      this.flashCardSetService.createFlashCardSet(new CreateFlashCardSetDTO(this.thecard)).subscribe(response => {

        console.log("created successfully", response);
        this.thRouter.navigate(['/createflashcard', response._id])
          .then(() => {
            this.stepper.next()
          })
      }, error => {
        console.error("Update failed", error);
      });
    }
  }

onCloseBtn(){
  this.thRouter.navigate(['/workshop'])

}


onPublish(){



this.flashCardSetService.publishFlashCardSet(this.thecard._id).subscribe(response => {
        //console.log("Updated successfully", response);
        this.thRouter.navigate(['/workshop'])
      }, error => {
        console.error("Update failed", error);
      });;
}

}
