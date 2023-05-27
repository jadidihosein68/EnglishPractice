import { Component } from '@angular/core';
import { FlashCardSetService } from '../services/FlashCardSetService';
import { FlashCardSet } from '../model/flashcardset';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';


@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent {


  cardinfo: FlashCardSet[] = [];
  activeFlashCardSets: FlashCardSet[] = [];
  draftFlashCardSets: FlashCardSet[] = [];

  constructor(private flashCardSetService: FlashCardSetService, private breakpointObserver: BreakpointObserver, private router: Router) { }


  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        // this.cols = 1;  // use one column on small screens
      } else {
        // this.cols = 5;  // use three columns on larger screens
      }
    });


    this.flashCardSetService.getFlashCardSets().subscribe(
      data => {
        this.cardinfo = data;
      },
      error => {
        console.error('Error:', error);
      }
    );

  }



  handleCardDeletion(deletedCardId: string) {
    this.cardinfo = this.cardinfo.filter(card => card._id !== deletedCardId);
  }


  get draftPaginatedFlashcards() {
    return this.cardinfo.filter(set => set.status === 'Draft');
  }

  get actiePaginatedFlashcards() {
    return this.cardinfo.filter(set => set.status === 'Published');
  }





  onResize(event?: Event) {
    // this.cols = (window.innerWidth < 600) ? 1 : 5;
  }


  onAddRecord() {
    this.router.navigate(['/createflashcard']);
  }
}
