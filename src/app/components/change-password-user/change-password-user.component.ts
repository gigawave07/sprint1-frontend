import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material';
import {UserService} from '../../service/user/user.service';

import {LoginService} from '../../service/login.service';
// function comparePassword(c: AbstractControl) {
//   const v = c.value;
//   const isA = v.newPassword === v.confirmPassword;
//   const isB = v.newPassword !== v.oldPassword;
//   return (isB && isA) ? null : {
//       passwordNotMatch: true
//   };
// }

function comparePassword(formGroup: AbstractControl): ValidationErrors | null {
  const password = formGroup.get('newPassword').value;
  const confirmPassword = formGroup.get('confirmPassword').value;
  if (password !== confirmPassword) {
    return { checkPassword: true };
  }
  return null;
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
      oldPassword: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/)]],
      newPassword: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/)]],
      confirmPassword: ['', [Validators.required]],
    }, { validator: comparePassword});
  }
  changePass() {
    this.formChangePassword.markAllAsTouched();
    if (this.formChangePassword.valid) {
      this.userService.changePassword(this.idUser, this.formChangePassword.value).subscribe(data => {
        console.log(data);
        this.dialogRef.close();
        // this.loginService.logout();
      });
    }

}}
