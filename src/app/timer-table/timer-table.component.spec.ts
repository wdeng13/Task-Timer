import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerTableComponent } from './timer-table.component';

describe('TimerTableComponent', () => {
  let component: TimerTableComponent;
  let fixture: ComponentFixture<TimerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimerTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
