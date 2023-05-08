import { Component, OnInit  } from '@angular/core';
import { AuthService } from '../services/auth.service';

declare var M: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {


  constructor(
    public authService: AuthService
) { }

  title = 'angular-responsive-navbar';
  isCollapsed = true;
  userImageUrl: string | null = null;


  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, { edge: 'right' });
    });
  }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

  logout(){
    this.authService.logout();
  }

}
