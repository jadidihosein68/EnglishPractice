
import { FlashCard } from "../flashcard";

export class FlashCardDTO {


  constructor(_flashCard: FlashCard) {
    this.front = _flashCard.front;
    this.hints = _flashCard.hints;
    this.back = _flashCard.back;
    this.soundIsActive = _flashCard.soundIsActive;
  }
  //id: string;
  front: string;
  hints: string;
  back: string
  soundIsActive: boolean;
}