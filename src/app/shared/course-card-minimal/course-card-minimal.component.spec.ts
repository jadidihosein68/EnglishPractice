import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCardMinimalComponent } from './course-card-minimal.component';

describe('CourseCardMinimalComponent', () => {
  let component: CourseCardMinimalComponent;
  let fixture: ComponentFixture<CourseCardMinimalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseCardMinimalComponent]
    });
    fixture = TestBed.createComponent(CourseCardMinimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
