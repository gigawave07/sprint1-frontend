import {Component, ElementRef, OnInit} from '@angular/core';
import {PromotionService} from '../promotion/promotion.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';



@Component({
  selector: 'app-promotion-code',
  templateUrl: './promotion-code.component.html',
  styleUrls: ['./promotion-code.component.css']
})
export class PromotionCodeComponent implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
    // tslint:disable-next-line:no-shadowed-variable
    public PromotionService: PromotionService,
    public router: Router,
    private el: ElementRef
  ) {
  }
  listPromotion: any;
  p: any;

  ngOnInit() {
    this.PromotionService.getAll().subscribe(data => {
      this.listPromotion = data;
      console.log(this.listPromotion);
    });
  }
}
