import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day19assignmentComponent } from './day19assignment.component';

describe('Day19assignmentComponent', () => {
  let component: Day19assignmentComponent;
  let fixture: ComponentFixture<Day19assignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day19assignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day19assignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
