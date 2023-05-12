import { Component } from '@angular/core';
import {ThemePalette} from '@angular/material/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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

  people = [
    { 
      name: 'John Doe', 
      bio: 'Lorem ipsum dolor sit amet.',
      imageUrl: 'https://via.placeholder.com/150',
      caption: 'Caption for image 1',
      progress: 70,
      rating: 4
    },
    { 
      name: 'Jane Doe', 
      bio: 'Consectetur adipiscing elit.',
      imageUrl: 'https://via.placeholder.com/150',
      caption: 'Caption for image 2',
      progress: 40,      
      rating: 2
    },
    { 
      name: 'John Doe', 
      bio: 'Lorem ipsum dolor sit amet.',
      imageUrl: 'https://via.placeholder.com/150',
      caption: 'Caption for image 1',
      progress: 70,      
      rating: 3
    },
    { 
      name: 'John Doe', 
      bio: 'Lorem ipsum dolor sit amet.',
      imageUrl: 'https://via.placeholder.com/150',
      caption: 'Caption for image 1',
      progress: 70,      
      rating: 1
    },
    // add more people here
  ];

  cards = [
    {
      title: 'Card 1',
      image: 'url-to-image-1',
      description: 'This is card 1',
      rating: 4.5,
      author: 'Author 1',
    },
    {
      title: 'Card 2',
      image: 'url-to-image-2',
      description: 'This is card 2',
      rating: 5,
      author: 'Author 2',
    },
    //...more cards
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