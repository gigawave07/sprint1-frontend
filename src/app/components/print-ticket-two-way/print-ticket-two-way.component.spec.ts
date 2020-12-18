import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintTicketTwoWayComponent } from './print-ticket-two-way.component';

describe('PrintTicketTwoWayComponent', () => {
  let component: PrintTicketTwoWayComponent;
  let fixture: ComponentFixture<PrintTicketTwoWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintTicketTwoWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintTicketTwoWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
