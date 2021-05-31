import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarhtmlComponent } from './sidebarhtml.component';

describe('SidebarhtmlComponent', () => {
  let component: SidebarhtmlComponent;
  let fixture: ComponentFixture<SidebarhtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarhtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarhtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
