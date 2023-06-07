import { Component, OnInit, Renderer2   } from '@angular/core';
import { AuthService } from '../services/auth.service';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

declare var M: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  title = 'angular-responsive-navbar';
  isCollapsed = false;
  userImageUrl: string | null = null;

  isSmallScreen: Observable<boolean>;

  constructor(breakpointObserver: BreakpointObserver,public authService: AuthService , private renderer: Renderer2) {
    this.isSmallScreen = breakpointObserver.observe(Breakpoints.Handset)
      .pipe(map(result => result.matches));
  }


  ngOnInit() {
  }

  toggleNavbar(sidenav:any) {

    sidenav.toggle()
    console.log(this.isCollapsed);
    this.isCollapsed = !this.isCollapsed;

    if (this.isCollapsed) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
      this.renderer.setStyle(document.documentElement, 'overflow', 'hidden');
    } else {
      this.renderer.removeStyle(document.body, 'overflow');
      this.renderer.removeStyle(document.documentElement, 'overflow');
    }
  }

  logout(){
    this.authService.logout();
  }
  clossidenavbar(){
    this.isCollapsed = false; 
    this.renderer.removeStyle(document.body, 'overflow');
    this.renderer.removeStyle(document.documentElement, 'overflow');
  }



  closeSidenav(sidenav: any) {
    sidenav.close();
    this.isCollapsed = false; 
    this.renderer.removeStyle(document.body, 'overflow');
    this.renderer.removeStyle(document.documentElement, 'overflow');
  }



  
  

}
