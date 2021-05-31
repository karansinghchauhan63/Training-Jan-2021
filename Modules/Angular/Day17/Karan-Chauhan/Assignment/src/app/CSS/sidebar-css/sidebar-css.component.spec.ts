import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarCssComponent } from './sidebar-css.component';

describe('SidebarCssComponent', () => {
  let component: SidebarCssComponent;
  let fixture: ComponentFixture<SidebarCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarCssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
