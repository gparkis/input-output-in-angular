import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardclassComponent } from './cardclass.component';

describe('CardclassComponent', () => {
  let component: CardclassComponent;
  let fixture: ComponentFixture<CardclassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
