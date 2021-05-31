import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day16practiceComponent } from './day16practice.component';

describe('Day16practiceComponent', () => {
  let component: Day16practiceComponent;
  let fixture: ComponentFixture<Day16practiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day16practiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day16practiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
