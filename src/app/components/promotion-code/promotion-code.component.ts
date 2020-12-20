import { Component, OnInit } from '@angular/core';
import {PromotionCodeService} from '../../service/promotion_code/promotion-code.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-promotion-code',
  templateUrl: './promotion-code.component.html',
  styleUrls: ['./promotion-code.component.css']
})
export class PromotionCodeComponent implements OnInit {
  public promotionCodeResult: any;
  public formSendEmail: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public promotionCodeService: PromotionCodeService
  ) { }

  ngOnInit() {
    this.promotionCodeService.findAllPromotionCode().subscribe(data => {
      this.promotionCodeResult = data;
      console.log(this.promotionCodeResult);
    });
    this.formSendEmail = this.formBuilder.group({
      emailPassgenger: ['', [Validators.required, Validators.email]],
    });
  }

  sendEmail() {
  }
}
