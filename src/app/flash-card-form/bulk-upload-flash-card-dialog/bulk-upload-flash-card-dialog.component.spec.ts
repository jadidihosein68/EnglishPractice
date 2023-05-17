import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkUploadFlashCardDialogComponent } from './bulk-upload-flash-card-dialog.component';

describe('BulkUploadFlashCardDialogComponent', () => {
  let component: BulkUploadFlashCardDialogComponent;
  let fixture: ComponentFixture<BulkUploadFlashCardDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulkUploadFlashCardDialogComponent]
    });
    fixture = TestBed.createComponent(BulkUploadFlashCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
