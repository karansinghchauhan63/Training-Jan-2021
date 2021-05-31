import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day4practiceComponent } from './day4practice.component';

describe('Day4practiceComponent', () => {
  let component: Day4practiceComponent;
  let fixture: ComponentFixture<Day4practiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day4practiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day4practiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
