import { Component, OnInit, ViewChild  } from '@angular/core';
import { Course } from '../model/course';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  @ViewChild('drawer', { static: false }) drawer!: MatSidenav;
  isExpanded = true;

  courses: Course[] = [
    {
      id: 1,
      title: 'Learn Angular from Scratch',
      description :"blab blab blab",
      instructor: 'John Doe',
      imageUrl: 'https://example.com/course1.jpg',
      rating: 4.5,
      author: "my self",
      price: 49.99
    },
    {
      id: 2,
      title: 'Mastering React',
      description :"blab blab blab",
      instructor: 'Jane Smith',
      imageUrl: 'https://example.com/course2.jpg',
      rating: 4.7,
      author: "my self",
      price: 39.99
    },
    // ... add more courses as needed
  ];

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
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