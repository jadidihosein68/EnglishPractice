import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-bulk-upload-flash-card-dialog',
  templateUrl: './bulk-upload-flash-card-dialog.component.html',
  styleUrls: ['./bulk-upload-flash-card-dialog.component.scss']
})
export class BulkUploadFlashCardDialogComponent {
  @ViewChild('fileInput') fileInput: ElementRef;
  file: File | null = null;

  constructor(public dialogRef: MatDialogRef<BulkUploadFlashCardDialogComponent>) {}

  close(): void {
    this.dialogRef.close();
  }

  onFileDropped(event: CdkDragDrop<File[]>): void {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    this.file = event.container.data[0];
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;

    if (!input.files?.length) {
      return;
    }

    this.file = input.files[0];
  }

  upload(): void {
    if (this.file) {
      this.dialogRef.close(this.file);
    }
  }
}