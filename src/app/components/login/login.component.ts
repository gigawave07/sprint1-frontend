import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AppUser} from "../../model/AppUser";
import {LoginService} from "../../service/login.service";
import {JwtStorageService} from "../../service/jwt-storage.service";
import {Router} from "@angular/router";
import {NavBarComponent} from "../nav-bar/nav-bar.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: AppUser;

  constructor(public formBuilder: FormBuilder,
              public loginService: LoginService,
              public jwtStorageService: JwtStorageService,
              public router: Router,
              ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    })
  }

  onSubmit() {
    this.user = {
      username: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.loginService.authenticate(this.user).subscribe(data => {
      this.jwtStorageService.user = this.user;
      this.jwtStorageService.token = data.token;
      this.jwtStorageService.isAuthenticated = true;
      this.loginService.broadcastLoginChange(this.user.username);

      this.router.navigateByUrl("");

    })
  }
}
