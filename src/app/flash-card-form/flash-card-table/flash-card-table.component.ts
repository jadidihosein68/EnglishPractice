
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {AddFlashCardDialogComponent} from '../add-flash-card-dialog/add-flash-card-dialog.component';
import {BulkUploadFlashCardDialogComponent} from '../bulk-upload-flash-card-dialog/bulk-upload-flash-card-dialog.component';

import { MatDialog } from '@angular/material/dialog';
import { FlashCard } from '../../model/flashcard';




@Component({
  selector: 'app-flash-card-table',
  templateUrl: './flash-card-table.component.html',
  styleUrls: ['./flash-card-table.component.scss']
})

export class FlashCardTableComponent implements AfterViewInit {
  displayedColumns: string[] = ['Front', 'Hint', 'Back', 'SoundIsActive', 'Action'];
  dataSource: MatTableDataSource<FlashCard>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  flashcards: FlashCard[] = [
    {id: '1', Front: 'Front1', Hint:"Some Hint1", Back: 'Back1', SoundIsActive: true},
    {id: '2', Front: 'Front2', Hint:"Some Hint2", Back: 'Back2', SoundIsActive: false},
    // Add more FlashCard objects here
  ];



  constructor(public dialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.flashcards);
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

  deleteRecord(row: FlashCard): void {
    // For now, we're just removing the FlashCard from the list
    this.flashcards = this.flashcards.filter(flashcard => flashcard.id !== row.id);

    // Update the table's data source
    this.dataSource = new MatTableDataSource(this.flashcards);
  }


  addRecord(): void {
    this.openDialog();
  }

  editRecord(row: FlashCard): void {
    this.openDialog(row);
  }

  openDialog(data?: FlashCard): void {
    const dialogRef = this.dialog.open(AddFlashCardDialogComponent, {
      width: '80%',
      maxWidth: '500px',
      data: data  // Pass data if it exists (for editing)
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle result here
        console.log({result:result});
      }
    });
  }



/*

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



  
  editRecord(row: FlashCard): void {


    const dialogRef = this.dialog.open(AddFlashCardDialogComponent, {
      width: '80%',
      maxWidth: '500px',
      data: row  // Pass the selected FlashCard to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle result here
        console.log({result:result});
      }
    });
  }
*/




}

