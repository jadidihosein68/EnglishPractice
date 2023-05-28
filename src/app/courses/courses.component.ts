import { Component, OnInit, ViewChild  } from '@angular/core';
import { Course } from '../model/course';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FlashCardSetService } from '../services/FlashCardSetService';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  @ViewChild('drawer', { static: false }) drawer!: MatSidenav;
  isExpanded = true;

  courses: any[] = [
    {
      id: 1,
      title: 'PTE Exam Flashcard Package',
      description :"Master PTE with concise flashcards",
      instructor: 'Dr. John Doe',
      imageUrl: '/assets/image/pte.png',
      rating: 4.5,
      author: "my self",
      price: 49.99,
    },
    {
      id: 2,
      title: 'IELTS Flashcard Study Set',
      description :"Achieve IELTS Success with Comprehensive Flashcards Covering All Sections",
      instructor: 'Ikram Bin Duludin',
      imageUrl: '/assets/image/Ielts.png',
      rating: 4.7,
      author: "my self",
      price: 39.99
    },
    // ... add more courses as needed
  ];

  constructor(private breakpointObserver: BreakpointObserver,
    private flashCardSetService: FlashCardSetService) { }

  ngOnInit() {



    this.flashCardSetService.getListOfPublishedFlashCardSet().subscribe(res => {
      console.log('Card sets retrived', res);

      this.courses = res;
      
    }, err => {
      console.log('Error retriving card sets', err);
      
    });


    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((state) => {
        if (state.matches) {
          this.isExpanded = false;
        } else {
          this.isExpanded = true;
        }
      });}
}