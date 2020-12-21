import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LoginService} from '../../service/login.service';
import {Router} from '@angular/router';
import {SpinnerOverlayService} from '../../service/animations/spinner-overlay.service';
import {MatDialogRef} from '@angular/material';

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
              public spinnerOverlayService: SpinnerOverlayService,
              private dialogRef: MatDialogRef<LoginComponent>
  ) {
    console.log(this);
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  onSubmit() {
    this.spinnerOverlayService.show('Xin đợi trong giây lát');
    this.user = {
      username: this.loginForm.value.email,
      password: this.loginForm.value.password
    };
    this.loginService.authenticate(this.user).subscribe(data => {
      if (data.message) {
        this.message = data.message;
        this.loginService.logout();
      } else {
        this.loginService.broadcastLoginChange(this.user);
      }
    }, error => {
      this.message = 'Sai email hoặc password';
    }, () => {
      this.spinnerOverlayService.hide();
      this.dialogRef.close();
    });
  }
}
