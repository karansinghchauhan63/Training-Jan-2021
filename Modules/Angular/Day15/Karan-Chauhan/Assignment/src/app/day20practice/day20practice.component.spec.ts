import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day20practiceComponent } from './day20practice.component';

describe('Day20practiceComponent', () => {
  let component: Day20practiceComponent;
  let fixture: ComponentFixture<Day20practiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day20practiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day20practiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
