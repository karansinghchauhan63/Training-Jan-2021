import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedialayoutComponent } from './medialayout.component';

describe('MedialayoutComponent', () => {
  let component: MedialayoutComponent;
  let fixture: ComponentFixture<MedialayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedialayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedialayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
