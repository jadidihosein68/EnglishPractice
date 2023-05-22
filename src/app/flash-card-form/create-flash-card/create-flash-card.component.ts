import { Component, Output, EventEmitter, Input, OnChanges  } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FlashCardSet } from '../../model/flashcardset';

@Component({
  selector: 'app-create-flash-card',
  templateUrl: './create-flash-card.component.html',
  styleUrls: ['./create-flash-card.component.scss']
})
export class CreateFlashCardComponent implements OnChanges  {

  @Output() cardUpdated = new EventEmitter<any>();
  @Input() cardInfo: FlashCardSet;
  
  
/*  
  get cardInfo():FlashCardSet{
    return this._cardInfo;
  }

  set cardInfo(value){
    this._cardInfo=value;
  }

  private _cardInfo: FlashCardSet;
*/

  cardForm = new FormGroup({
    title: new FormControl('', Validators.required),
    imageUrl: new FormControl('https://via.placeholder.com/150', Validators.required),
    ispublic: new FormControl(true)
  });

  constructor() {
    this.cardForm.valueChanges.subscribe(data => {
      const cardData = this.cardForm.value;
      cardData.ispublic = cardData.ispublic == true ? true : false;
      this.cardUpdated.emit(cardData);
    });
  }






  



  ngOnChanges() {


    console.log({cardInfo :this.cardInfo })

  //  if (this.cardInfo) {
      this.cardForm.patchValue({
        title: this.cardInfo.title,
        imageUrl: this.cardInfo.imageUrl,
        ispublic: this.cardInfo.public == true  ? true : false,
      });
  //  }
  }

  onFormUpdate() {
    const cardData = this.cardForm.value;
    //cardData.ispublic = cardData.ispublic === 'true' ? true : false;
    this.cardUpdated.emit(cardData);
  }
}
