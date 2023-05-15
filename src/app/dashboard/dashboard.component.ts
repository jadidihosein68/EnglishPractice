import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  isSmallScreen$: Observable<boolean>;
  isCreator = true; // Update this based on user role

  constructor(breakpointObserver: BreakpointObserver) {
    this.isSmallScreen$ = breakpointObserver.observe(Breakpoints.Handset)
      .pipe(map(result => result.matches));
  }

  

}
