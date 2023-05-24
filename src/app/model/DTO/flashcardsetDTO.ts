import { FlashCardDTO } from "./flashcardDTO";
import { FlashCardSet } from "../flashcardset";

export class CreateFlashCardSetDTO {

constructor (flashCardSet : FlashCardSet){
//this._id = flashCardSet._id ;
this.title= flashCardSet.title;
this.subject = flashCardSet.subject;
this.ispublic = flashCardSet.ispublic;
//this.author= flashCardSet.author;
this.imageUrl=flashCardSet.imageUrl;
//this.rating= flashCardSet.rating;
//this.status= flashCardSet.status;
//this.progress= flashCardSet.progress;
this.flashcards= flashCardSet.flashcards?.map(fc => new FlashCardDTO(fc));;
}

  //_id: string;
  title: string;
  subject: string;
  ispublic: Boolean;
 //author: string;
  imageUrl: string;
  //rating: number;
  //status: string;
  //progress: number;
  flashcards?: FlashCardDTO[];
}
