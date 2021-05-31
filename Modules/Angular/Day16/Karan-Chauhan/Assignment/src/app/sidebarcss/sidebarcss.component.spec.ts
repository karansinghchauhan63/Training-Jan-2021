import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarcssComponent } from './sidebarcss.component';

describe('SidebarcssComponent', () => {
  let component: SidebarcssComponent;
  let fixture: ComponentFixture<SidebarcssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarcssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarcssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
