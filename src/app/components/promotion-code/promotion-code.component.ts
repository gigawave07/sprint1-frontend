import { Component, OnInit } from '@angular/core';
import {PromotionCodeService} from '../../service/promotion_code/promotion-code.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-promotion-code',
  templateUrl: './promotion-code.component.html',
  styleUrls: ['./promotion-code.component.css']
})
export class PromotionCodeComponent implements OnInit {
  public messageSuccess = '';
  public promotionCodeResult: any;
  public formSendEmail: FormGroup;
  constructor(
    public formBuilder: FormBuilder,
    public promotionCodeService: PromotionCodeService,
    public router: Router
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
    this.promotionCodeService.sendEmail(this.formSendEmail.value.emailPassgenger).subscribe(data => {
      console.log(data);
      this.messageSuccess = 'Bạn đã đăng ký email thành công.';
      setTimeout(() => {
        this.messageSuccess = '';
      }, 2000);
      this.formSendEmail.value.emailPassgenger = null;
      this.ngOnInit();
    });
  }
}
