import { Component, OnInit, ViewChild } from '@angular/core';
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

  courses: any[] = [];

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
      });
  }
}