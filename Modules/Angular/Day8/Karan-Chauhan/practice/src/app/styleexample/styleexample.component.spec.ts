import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleexampleComponent } from './styleexample.component';

describe('StyleexampleComponent', () => {
  let component: StyleexampleComponent;
  let fixture: ComponentFixture<StyleexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
