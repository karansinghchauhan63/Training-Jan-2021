import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutpracticeComponent } from './layoutpractice.component';

describe('LayoutpracticeComponent', () => {
  let component: LayoutpracticeComponent;
  let fixture: ComponentFixture<LayoutpracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutpracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
