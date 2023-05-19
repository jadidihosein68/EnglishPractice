import {FlashCard} from "./flashcard";

export interface FlashCardSet {
    id: string;
    title: string;
    subject:string;
    public:Boolean
    author:boolean;
    flashcards:FlashCard[];
  }