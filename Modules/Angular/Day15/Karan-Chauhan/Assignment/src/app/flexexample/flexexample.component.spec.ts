import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexexampleComponent } from './flexexample.component';

describe('FlexexampleComponent', () => {
  let component: FlexexampleComponent;
  let fixture: ComponentFixture<FlexexampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlexexampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlexexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
