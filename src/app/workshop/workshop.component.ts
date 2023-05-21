import { Component } from '@angular/core';
import { FlashCardSetService } from '../services/FlashCardSetService';

@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent {


  constructor(private flashCardSetService: FlashCardSetService) {}


   ngOnInit() {
    
    this.flashCardSetService.getFlashCardSets().subscribe(
      data => {
        this.cardinfo = data;
      },
      error => {
        console.error('Error:', error);
      }
    );    
  }

  cardinfo = [];
  
}
