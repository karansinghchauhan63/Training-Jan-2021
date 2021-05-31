import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarJsComponent } from './sidebar-js.component';

describe('SidebarJsComponent', () => {
  let component: SidebarJsComponent;
  let fixture: ComponentFixture<SidebarJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
