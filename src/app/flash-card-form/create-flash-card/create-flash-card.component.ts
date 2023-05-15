import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-flash-card',
  templateUrl: './create-flash-card.component.html',
  styleUrls: ['./create-flash-card.component.scss']
})
export class CreateFlashCardComponent {


  @Output() cardUpdated = new EventEmitter<any>();


  constructor() {
    this.cardForm.valueChanges.subscribe(data => {
      this.cardUpdated.emit(this.cardForm.value);
    });
  }


  cardForm = new FormGroup({
    caption: new FormControl('', Validators.required),
    imageUrl: new FormControl('https://via.placeholder.com/150', Validators.required),
    author: new FormControl('', Validators.required),
    tags: new FormControl(''),
    visibility: new FormControl('', Validators.required)
  });


  onFormUpdate() {
    const cardData = {}; // get updated card data from form
    this.cardUpdated.emit(cardData);
  }


}
