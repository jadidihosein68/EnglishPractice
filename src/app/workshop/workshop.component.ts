import { Component } from '@angular/core';
import { FlashCardSetService } from '../services/FlashCardSetService';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';



@Component({
  selector: 'app-workshop',
  templateUrl: './workshop.component.html',
  styleUrls: ['./workshop.component.scss']
})
export class WorkshopComponent {

  cols: number;

  constructor(private flashCardSetService: FlashCardSetService , private breakpointObserver: BreakpointObserver) {}


   ngOnInit() {





    this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).subscribe(result => {
      if (result.matches) {
        this.cols = 1;  // use one column on small screens
      } else {
        this.cols = 5;  // use three columns on larger screens
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

  cardinfo = [];
  
}
