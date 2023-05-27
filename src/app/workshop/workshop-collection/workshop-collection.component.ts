import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FlashCardSet } from '../../model/flashcardset';


@Component({
  selector: 'app-workshop-collection',
  templateUrl: './workshop-collection.component.html',
  styleUrls: ['./workshop-collection.component.scss']
})
export class WorkshopCollectionComponent {
  @Input() flashcards: FlashCardSet[];
  @Output() delete: EventEmitter<string> = new EventEmitter();

  pageSizeOptions: number[] = [5, 10, 20, 50];
  pageSize: number = this.pageSizeOptions[0];
  pageIndex: number = 0;

  ngOnInit() {
  }

  onPageChange(event: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  get paginatedFlashcards() {
    const start = this.pageIndex * this.pageSize;
    const end = start + this.pageSize;
    return this.flashcards.slice(start, end);
  }

  handleCardDeletion(event: any) {
    this.delete.emit(event);
  }


}
