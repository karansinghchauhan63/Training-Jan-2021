import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day17practiceComponent } from './day17practice.component';

describe('Day17practiceComponent', () => {
  let component: Day17practiceComponent;
  let fixture: ComponentFixture<Day17practiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day17practiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day17practiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
