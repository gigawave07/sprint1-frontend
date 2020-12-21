import {Component, OnInit} from '@angular/core';
import {PromotionService} from '../promotion.service';

@Component({
  selector: 'app-promotion-list-for-customer',
  templateUrl: './promotion-list-for-customer.component.html',
  styleUrls: ['./promotion-list-for-customer.component.css']
})
export class PromotionListForCustomerComponent implements OnInit {
  public listPromotion;
  p: number;
  term: string;
  promotion: any;
  key: any;
  inputSearch: any;

  constructor(
    public promotionService: PromotionService
  ) {
  }

  ngOnInit() {
    this.promotionService.getAll().subscribe(data => {
      this.listPromotion = data;
      for (const cus of this.listPromotion) {
        cus.arrivalTime = cus.departureDate + ' ' + cus.arrivalTime;
        cus.departureTime = cus.departureDate + ' ' + cus.departureTime;
      }
    });
  }
  getPromotion() {
    this.promotionService.search(this.key, this.inputSearch).subscribe(data => {
      this.promotion = data.content;
      console.log(data);
    });
  }
}

