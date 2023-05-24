
import {AfterViewInit, Component, ViewChild, Input , OnInit,  OnChanges, SimpleChanges  } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {AddFlashCardDialogComponent} from '../add-flash-card-dialog/add-flash-card-dialog.component';
import {BulkUploadFlashCardDialogComponent} from '../bulk-upload-flash-card-dialog/bulk-upload-flash-card-dialog.component';

import { MatDialog } from '@angular/material/dialog';
import { FlashCard } from '../../model/flashcard';
import { FlashCardSet } from '../../model/flashcardset';



@Component({
  selector: 'app-flash-card-table',
  templateUrl: './flash-card-table.component.html',
  styleUrls: ['./flash-card-table.component.scss']
})

export class FlashCardTableComponent implements AfterViewInit, OnInit  {

  @Input() cardInfo: FlashCardSet;

  displayedColumns: string[] = ['Front', 'Hint', 'Back', 'SoundIsActive', 'Action'];
  dataSource: MatTableDataSource<FlashCard>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;




  constructor(public dialog: MatDialog) {   
  }

  ngOnInit() {

    this.dataSource = new MatTableDataSource(this.cardInfo.flashcards);
    console.log({expectedTable:this.cardInfo})


  }


/*
  ngOnChanges(changes: SimpleChanges) {
    if (changes['cardInfo'] && !changes['cardInfo'].firstChange) {
      // Call a method or update the necessary data for your table
      //this.updateTable();
    //  this.dataSource.data = this.cardInfo.flashcards;
    //console.log({expectedTable:this.cardInfo})
    this.dataSource = new MatTableDataSource(this.cardInfo.flashcards);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;


    }
  }

*/


  ngOnChanges(changes: SimpleChanges) {
    if (changes['cardInfo']) {
      // Make a new MatTableDataSource so Angular picks up the changes
      this.dataSource = new MatTableDataSource(this.cardInfo.flashcards);
      // Apply paginator and sort after data changes
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
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
    //this.flashcards = this.flashcards.filter(flashcard => flashcard.id !== row.id);

    // Update the table's data source
    //this.dataSource = new MatTableDataSource(this.flashcards);
  }


  addRecord(): void {
    this.openDialog( this.cardInfo._id);
    this.dataSource.data = [...(this.cardInfo.flashcards || [])];

  }

  editRecord(row?: FlashCard ): void {
    this.openDialog(this.cardInfo._id, row);
    this.dataSource.data = this.cardInfo.flashcards|| [];
    
  }

  openDialog(flashcardsetid?: string , data?: FlashCard , ): void {
  
  
    const dialogRef = this.dialog.open(AddFlashCardDialogComponent, {
      width: '80%',
      maxWidth: '500px',
      data: {flashcardsetid , FlashCard:data}  // Pass data if it exists (for editing)
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // Handle result here
        //console.log({result:result});
        //this.dataSource.data = [...(this.cardInfo.flashcards || [])];
        this.cardInfo.flashcards = this.cardInfo.flashcards ? [...this.cardInfo.flashcards, result] : [result];
        this.dataSource.data = [...(this.cardInfo.flashcards || [])];
        console.log('Updated cardInfo:', this.cardInfo);
        console.log('Table data:', this.dataSource.data);

      }
    });
  }


}

