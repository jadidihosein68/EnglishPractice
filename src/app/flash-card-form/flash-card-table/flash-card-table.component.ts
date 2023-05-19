
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {AddFlashCardDialogComponent} from '../add-flash-card-dialog/add-flash-card-dialog.component';
import {BulkUploadFlashCardDialogComponent} from '../bulk-upload-flash-card-dialog/bulk-upload-flash-card-dialog.component';

import { MatDialog } from '@angular/material/dialog';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}


/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];



@Component({
  selector: 'app-flash-card-table',
  templateUrl: './flash-card-table.component.html',
  styleUrls: ['./flash-card-table.component.scss']
})

export class FlashCardTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit', 'action'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(public dialog: MatDialog) {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  addRecord(): void {
    const dialogRef = this.dialog.open(AddFlashCardDialogComponent, {
      width: '80%',
      maxWidth: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
       console.log({result:result});
      }
    });
  }


  bulkUpload(): void {
    const dialogRef = this.dialog.open(BulkUploadFlashCardDialogComponent, {
      width: '80%',
      maxWidth: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
      }
    });
  }

  deleteRecord(row:any){}


  editRecord(row:any){
    
  }
  

}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };





}