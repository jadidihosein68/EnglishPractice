import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishLearnerCardComponent } from './english-learner-card.component';

describe('EnglishLearnerCardComponent', () => {
  let component: EnglishLearnerCardComponent;
  let fixture: ComponentFixture<EnglishLearnerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishLearnerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnglishLearnerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
