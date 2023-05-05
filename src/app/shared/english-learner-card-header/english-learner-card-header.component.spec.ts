import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishLearnerCardHeaderComponent } from './english-learner-card-header.component';

describe('EnglishLearnerCardHeaderComponent', () => {
  let component: EnglishLearnerCardHeaderComponent;
  let fixture: ComponentFixture<EnglishLearnerCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishLearnerCardHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishLearnerCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
