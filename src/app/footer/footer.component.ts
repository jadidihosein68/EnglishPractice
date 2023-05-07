import { Component,OnInit } from '@angular/core';
import { environment } from '../../environments/environments';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  canShowLogin?: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.canShowLogin = !environment.production;
  }

}
