import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {FormBuilder} from '@angular/forms';
import {NestedTreeControl} from '@angular/cdk/tree';

import {MatTreeNestedDataSource} from '@angular/material/tree';

export interface Section {
  name: string;
  updated: Date;
}

interface FoodNode {
  name: string;
  children?: FoodNode[];
}




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  dataSource = new MatTreeNestedDataSource<FoodNode>();



  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Progress mob', cols: 2, rows: 1 },
          { title: 'Collection', cols: 2, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
        ];
      }

      return [
        { title: 'Progeress web', cols: 2, rows: 1 },
        { title: 'Collection', cols: 2, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },

      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {
  }
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}
