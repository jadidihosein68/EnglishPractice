import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-study-card-component',
  templateUrl: './study-card-component.component.html',
  styleUrls: ['./study-card-component.component.scss'],


  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateX(180deg)'
      })),
      state('inactive', style({
        transform: 'rotateX(0)'
      })),
      transition('active => inactive', animate('300ms ease-out')),
      transition('inactive => active', animate('300ms ease-in'))
    ])
  ]

})
export class StudyCardComponentComponent {


  flashcards    = [{
    title: "title",
    subtitle: "subtitle",
    front: "Front",
    back: "back"
  }, { title: 'Title 1', front: 'Front 1', back: 'Back 1', hint: 'Hint 1', showHint: false },
  { title: 'Title 2', front: 'Front 2', back: 'Back 2', hint: 'Hint 2', showHint: false },
  { title: 'Title 2', front: 'Front 2', back: 'Back 2', hint: 'Hint 2', showHint: false },
  { title: 'Title 2', front: 'Front 2', back: 'Back 2', hint: 'Hint 2', showHint: false },
  { title: 'Title 2', front: 'Front 2', back: 'Back 2', hint: 'Hint 2', showHint: false },
  { title: 'Title 2', front: 'Front 2', back: 'Back 2', hint: 'Hint 2', showHint: false },
  { title: 'Title 2', front: 'Front 2', back: 'Back 2', hint: 'Hint 2', showHint: false },
  { title: 'Title 2', front: 'Front 2', back: 'Back 2', hint: 'Hint 2', showHint: false },
  { title: 'Title 2', front: 'Front 2', back: 'Back 2', hint: 'Hint 2', showHint: false },
  { title: 'Title 2', front: 'Front 2', back: 'Back 2', hint: 'Hint 2', showHint: false },


]


flip: string = 'inactive';

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }



currentFlashCardIndex = 0;

get currentFlashCard() {
  return this.flashcards[this.currentFlashCardIndex];
}

goToNextCard() {
  this.currentFlashCardIndex++;
  if (this.currentFlashCardIndex >= this.flashcards.length) {
    this.currentFlashCardIndex = 0; // If you want to loop back to the start when you reach the end
  }
}

  showHint() {
  //  flashcard.showHint = true;
  }

  showFrontSide: boolean = true;

  animationDone(event:any) {
    if(event.toState === 'active') {
      this.showFrontSide = false;
    } else {
      this.showFrontSide = true;
    }
  }

  

  
}
