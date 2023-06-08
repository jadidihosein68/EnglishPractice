import { Component } from '@angular/core';
import { Angulartics2GoogleTagManager } from 'angulartics2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'english_Practice';
  isCollapsed = true;

  constructor(angulartics2GoogleTagManager: Angulartics2GoogleTagManager) {
    angulartics2GoogleTagManager.startTracking();
  }

}
