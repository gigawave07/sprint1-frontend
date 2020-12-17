import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {PromotionService} from '../../promotion.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-add-new',
  templateUrl: './add-new.component.html',
  styleUrls: ['./add-new.component.css']
})
export class AddNewComponent implements OnInit {
  public formAddNew: FormGroup;
  private listPromotion: any;
  constructor(public formBuilder: FormBuilder,
              public promotionService: PromotionService,
              public router: Router) { }

  ngOnInit() {
    this.formAddNew = this.formBuilder.group({
      flight: ['', Validators.required],
      airline: ['', Validators.required],
      flightNumber: ['', Validators.required],
      departureDate: ['', Validators.required],
      departurePlace: ['', Validators.required],
      departureTime: ['', Validators.required],
      arrivalPlace: ['', Validators.required],
      arrivalTime: ['', Validators.required],
      price: ['', Validators.required]
    });
  }
  addNewPromo() {
    console.log(this.formAddNew.value);
    this.promotionService.addNewPromo(this.formAddNew.value).subscribe(data => {
      this.router.navigateByUrl('promotion-list');
    });
  }
}
