import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from '../../service/register.service';
import {Router} from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';
import {SpinnerOverlayService} from '../../service/animations/spinner-overlay.service';
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user;
  account;
  message;

  matcher = new ErrorStateMatcher();

  constructor(public formBuilder: FormBuilder,
              public registerService: RegisterService,
              public router: Router,
              public spinnerOverlayService: SpinnerOverlayService) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,4}){1,2}$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{8,}$')]],
      confirmPassword: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      name: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      birthday: ['', [Validators.required, this.checkAge]],
      address: [''],
      gender: [''],
    }, {validator: this.ConfirmedValidator('password', 'confirmPassword')});
  }

  onSubmit() {
    this.user = {
      phoneNumber: this.registerForm.value.phone,
      fullName: this.registerForm.value.name,
      birthday: this.registerForm.value.birthday,
      address: this.registerForm.value.address,
      gender: this.registerForm.value.gender,
      email: this.registerForm.value.email
    };
    this.account = {
      username: this.registerForm.value.email,
      password: this.registerForm.value.password,
      appUser: this.user
    };

    if (this.registerForm.valid) {
      this.spinnerOverlayService.show();
      this.registerService.register(this.account)
        .pipe(finalize(() => this.spinnerOverlayService.hide()))
        .subscribe(data => {
          if (data.message) {
            this.message = data.message;
          } else {
            this.router.navigateByUrl('/verification-email');
          }
        });
    }
  }

  ConfirmedValidator(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({confirmedValidator: true});
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  checkAge(control: AbstractControl) {
    let birthday = new Date(control.value);
    let current = new Date();
    let diffTime = (current.getTime() - birthday.getTime()) / (1000 * 60 * 60 * 24 * 365);
    return (diffTime > 18 && diffTime < 150) ? true : {ageError: true};
  }
}

