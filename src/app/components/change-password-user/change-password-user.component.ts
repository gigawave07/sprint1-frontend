import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {UserService} from '../../service/user/user.service';

import {LoginService} from '../../service/login.service';
function comparePassword(c: AbstractControl) {
  const v = c.value;
  const isNotEmpty = v.confirmPassword !== '';
  if (isNotEmpty) {
    return (v.newPassword === v.confirmPassword) ? null : {
      passwordNotMatch: true
    };
  }
}

@Component({
  selector: 'app-change-password-user',
  templateUrl: './change-password-user.component.html',
  styleUrls: ['./change-password-user.component.css']
})
export class ChangePasswordUserComponent implements OnInit {
  formChangePassword: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ChangePasswordUserComponent>,
    public formBuilder: FormBuilder,
    private userService: UserService,
    public loginService: LoginService
  ) { }
  public idUser: number;
  ngOnInit() {
    this.idUser = this.loginService.currentUserValue.id;
    console.log(this.idUser);
    this.formChangePassword = this.formBuilder.group({
      oldPassword: ['', [Validators.required]],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }, { validator: comparePassword});
  }
  changePass() {
    this.formChangePassword.markAllAsTouched();
    if (this.formChangePassword.valid) {
      this.userService.changePassword(this.idUser, this.formChangePassword.value).subscribe(data => {
        console.log(data);
        this.dialogRef.close();
      });
    }

}}
