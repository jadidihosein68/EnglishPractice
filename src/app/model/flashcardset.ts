import {FlashCard} from "./flashcard";

export class FlashCardSet {
  _id: string;
  title: string;
  subject:string;
  ispublic:Boolean
  author:string;
  imageUrl:string;
  rating:number ;
  status:string;
  progress:number ;
  flashcards?:FlashCard[];
  }