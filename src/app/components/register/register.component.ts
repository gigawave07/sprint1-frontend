import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup,  Validators} from '@angular/forms';
import {RegisterService} from '../../service/register.service';
import {Router} from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';

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
              public router: Router) {
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-z][a-z0-9_\\.]{5,32}@[a-z0-9]{2,}(\\.[a-z0-9]{2,4}){1,2}$')]],
      password: ['', Validators.required],
      confirmPassword: ['', [Validators.required]],
      phone: [''],
      name: [''],
      birthday: [''],
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
      this.registerService.register(this.account).subscribe(data => {
        if (data.message) {
          this.message = data.message;
        } else { this.router.navigateByUrl('/verification-email'); }
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
        matchingControl.setErrors({ confirmedValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
}

