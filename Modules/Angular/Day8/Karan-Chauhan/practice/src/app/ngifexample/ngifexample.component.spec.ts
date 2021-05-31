import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgifexampleComponent } from './ngifexample.component';

describe('NgifexampleComponent', () => {
  let component: NgifexampleComponent;
  let fixture: ComponentFixture<NgifexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgifexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgifexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
