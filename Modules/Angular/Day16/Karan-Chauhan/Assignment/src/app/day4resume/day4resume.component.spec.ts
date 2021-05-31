import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4resumeComponent } from './day4resume.component';

describe('Day4resumeComponent', () => {
  let component: Day4resumeComponent;
  let fixture: ComponentFixture<Day4resumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4resumeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4resumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
