import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day18practiceComponent } from './day18practice.component';

describe('Day18practiceComponent', () => {
  let component: Day18practiceComponent;
  let fixture: ComponentFixture<Day18practiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day18practiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day18practiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
