import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCourseComponent } from './list-course.component';

describe('ListCourseComponent', () => {
  let component: ListCourseComponent;
  let fixture: ComponentFixture<ListCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
