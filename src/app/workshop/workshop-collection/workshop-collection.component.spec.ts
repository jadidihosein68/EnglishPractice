import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkshopCollectionComponent } from './workshop-collection.component';

describe('WorkshopCollectionComponent', () => {
  let component: WorkshopCollectionComponent;
  let fixture: ComponentFixture<WorkshopCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkshopCollectionComponent]
    });
    fixture = TestBed.createComponent(WorkshopCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
