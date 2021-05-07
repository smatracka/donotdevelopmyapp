import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryThumbnailComponent } from './summary-thumbnail.component';

describe('SummaryThumbnailComponent', () => {
  let component: SummaryThumbnailComponent;
  let fixture: ComponentFixture<SummaryThumbnailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryThumbnailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
