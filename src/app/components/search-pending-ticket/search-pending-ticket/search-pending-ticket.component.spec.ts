import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPendingTicketComponent } from './search-pending-ticket.component';

describe('SearchPendingTicketComponent', () => {
  let component: SearchPendingTicketComponent;
  let fixture: ComponentFixture<SearchPendingTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPendingTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPendingTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
