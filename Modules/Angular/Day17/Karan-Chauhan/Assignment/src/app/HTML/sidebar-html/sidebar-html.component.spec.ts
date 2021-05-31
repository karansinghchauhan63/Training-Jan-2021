import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarHtmlComponent } from './sidebar-html.component';

describe('SidebarHtmlComponent', () => {
  let component: SidebarHtmlComponent;
  let fixture: ComponentFixture<SidebarHtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarHtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarHtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
