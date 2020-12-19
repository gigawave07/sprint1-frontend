import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef} from '@angular/material';
import {UserService} from '../../service/user/user.service';

import {LoginService} from '../../service/login.service';
import {UserDialogComponent} from '../user-dialog/user-dialog.component';
import {error} from 'util';
function comparePassword(c: AbstractControl) {
  const v = c.value;
  const isA = v.newPassword === v.confirmPassword;
  const isB = v.newPassword !== v.oldPassword;
  return (isB && isA) ? null : {
      passwordNotMatch: true
  };
}

// function comparePassword(formGroup: AbstractControl): ValidationErrors | null {
//   const password = formGroup.get('newPassword').value;
//   const confirmPassword = formGroup.get('confirmPassword').value;
//   if (password !== confirmPassword) {
//     return {checkPassword: true};
//   }
//   return null;
// }

@Component({
  selector: 'app-change-password-user',
  templateUrl: './change-password-user.component.html',
  styleUrls: ['./change-password-user.component.css']
})
export class ChangePasswordUserComponent implements OnInit {
  formChangePassword: FormGroup;
  public errorMessage: string;

  constructor(
    public dialogRef: MatDialogRef<ChangePasswordUserComponent>,
    public formBuilder: FormBuilder,
    private userService: UserService,
    public loginService: LoginService,
    public dialog: MatDialog
  ) {
  }

  public idUser: number;

  ngOnInit() {
    this.idUser = this.loginService.currentUserValue.id;
    console.log(this.idUser);
    this.formChangePassword = this.formBuilder.group({
      oldPassword: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/)]],
      newPassword: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,20}$/)]],
      confirmPassword: ['', [Validators.required]],
    }, {validator: comparePassword});
  }

  changePass() {
    this.formChangePassword.markAllAsTouched();
    if (this.formChangePassword.valid) {
      this.userService.changePassword(this.idUser, this.formChangePassword.value).subscribe(data => {
        this.errorMessage = data;
        console.log(data);
        if (this.errorMessage == null) {
          this.dialogRef.close();
          this.openDialogConfirm(this.idUser);
        }
        // tslint:disable-next-line:no-shadowed-variable
      }, error => {
        console.log(error);
      });
    }
  }

  openDialogConfirm(idUser: number) {
    const dialogRef = this.dialog.open(UserDialogComponent, {
      width: '500px',
      height: '200x',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}


