import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day15practiceComponent } from './day15practice.component';

describe('Day15practiceComponent', () => {
  let component: Day15practiceComponent;
  let fixture: ComponentFixture<Day15practiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day15practiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day15practiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
