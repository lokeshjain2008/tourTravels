import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourListElementComponent } from './tour-list-element.component';

describe('TourListElementComponent', () => {
  let component: TourListElementComponent;
  let fixture: ComponentFixture<TourListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourListElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
