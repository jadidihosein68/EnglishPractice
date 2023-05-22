import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FlashCardSet} from '../model/flashcardset';




@Component({
  selector: 'learn-home',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent {
  tabLoadTimes: Date[] = [];

  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`


  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }

    return this.tabLoadTimes[index];
  }

  cardinfo = [
    
    // add more people here
  ];


  /*
  cols?: number;
  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = 1;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = 2;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = 3;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = 4;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = 5;
        }
      }
    });
  }
  */

}