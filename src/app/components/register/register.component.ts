import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RegisterService} from "../../service/register.service";
import {AppUser} from "../../model/AppUser";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user: AppUser;

  constructor(public formBuilder: FormBuilder,
              public registerService: RegisterService,
              public router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: [''],
      password: [''],
    })
  }


  onSubmit() {
    this.user = {
      username: this.registerForm.value.email,
      password: this.registerForm.value.password,
    }
    this.registerService.register(this.user).subscribe(data => {
      this.router.navigateByUrl("/verification-email");
    });
  }
}
