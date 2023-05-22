import {FlashCard} from "./flashcard";

export interface FlashCardSet {
  _id: string;
    title: string;
    subject:string;
    public:Boolean
    author:string;
    imageUrl:string;
    rating:number ;
    progress:number ;
    flashcards?:FlashCard[];
  }