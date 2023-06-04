import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyCardComponentComponent } from './study-card-component.component';

describe('StudyCardComponentComponent', () => {
  let component: StudyCardComponentComponent;
  let fixture: ComponentFixture<StudyCardComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudyCardComponentComponent]
    });
    fixture = TestBed.createComponent(StudyCardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
