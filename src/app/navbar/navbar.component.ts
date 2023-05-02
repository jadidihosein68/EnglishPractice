import { Component, OnInit  } from '@angular/core';
declare var M: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  title = 'angular-responsive-navbar';
  isCollapsed = true;
  


  ngOnInit() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, { edge: 'right' });
    });
  }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
  }

}
