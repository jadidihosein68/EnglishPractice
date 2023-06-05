import { Component, OnInit , Input} from '@angular/core';
import { ThemePalette } from '@angular/material/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FlashCardSet } from '../model/flashcardset';

import { FlashCardSetService } from '../services/FlashCardSetService';


@Component({
  selector: 'learn-home',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.scss']
})
export class LearnComponent implements OnInit {
  tabLoadTimes: Date[] = [];
  @Input() cardinfo : any ;
  constructor(private flashCardSetService: FlashCardSetService,) { }

  getTimeLoaded(index: number) {
    if (!this.tabLoadTimes[index]) {
      this.tabLoadTimes[index] = new Date();
    }
    return this.tabLoadTimes[index];
  }

  ngOnInit() {}
}