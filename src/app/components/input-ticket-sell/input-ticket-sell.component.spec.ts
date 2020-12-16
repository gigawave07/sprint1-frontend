import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTicketSellComponent } from './input-ticket-sell.component';

describe('InputTicketSellComponent', () => {
  let component: InputTicketSellComponent;
  let fixture: ComponentFixture<InputTicketSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputTicketSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputTicketSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
