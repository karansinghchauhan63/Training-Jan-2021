import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediademoComponent } from './mediademo.component';

describe('MediademoComponent', () => {
  let component: MediademoComponent;
  let fixture: ComponentFixture<MediademoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediademoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediademoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
