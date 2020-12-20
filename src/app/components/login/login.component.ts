import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginService} from '../../service/login.service';
import {Router} from '@angular/router';
import {SpinnerOverlayService} from '../../service/animations/spinner-overlay.service';
import {AuthService, GoogleLoginProvider} from 'angularx-social-login';
import {finalize} from "rxjs/operators";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user;
  message;

  constructor(public formBuilder: FormBuilder,
              public loginService: LoginService,
              public router: Router,
              public spinnerOverlayService: SpinnerOverlayService,
              private socialAuthService: AuthService
  ) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    this.spinnerOverlayService.show();
    this.user = {
      username: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.loginService.authenticate(this.user)
      .pipe(finalize(() => this.spinnerOverlayService.hide()))
      .subscribe(data => {
      if (data.message) {
        this.message = data.message;
        this.loginService.logout();
      } else {
        this.user = data;
        this.loginService.broadcastLoginChange(this.user);
        this.router.navigateByUrl('');
      }
    }, error => {
      this.message = 'Sai email hoặc password';
    });
  }

  loginGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(data => {
      this.user = {
        username: data.email,
        password: `${GoogleLoginProvider.PROVIDER_ID}`,
        fullName: data.name,
        appUser: {
          fullName: data.name,
          email: data.email,
        }
      };
      this.loginService.loginGoogle(this.user).subscribe(data => {
        this.loginService.broadcastLoginChange(this.user);
        this.router.navigateByUrl('');
      })
    });
  }
}
