import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlashCardTableComponent } from './flash-card-table.component';

describe('FlashCardTableComponent', () => {
  let component: FlashCardTableComponent;
  let fixture: ComponentFixture<FlashCardTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlashCardTableComponent]
    });
    fixture = TestBed.createComponent(FlashCardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
