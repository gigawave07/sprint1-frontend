import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {UserService} from '../../service/user/user.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {MessageUserComponent} from '../message-user/message-user.component';

// Kí tự đặt biệt
function validateSpecialCharacters(c: AbstractControl) {
  const pattern = /[$&+,:;=?@#|'<>.^*()%!-]+/;
  return (c.value.match(pattern)) ? {
    containSpecialCharacters: true
  } : null;
}
// validate khoảng trắng
function validateWhitespace(c: AbstractControl) {
  if (c.value !== '') {
    const isWhitespace = c.value.trim().length === 0;
    if (isWhitespace) {
      const isValid = !isWhitespace;
      return isValid ? null : {whitespace: true};
    }
  }
}
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public userOfId;
  public dataIdUser;
  public valueGender;
  formEditUser: FormGroup;
  public idMessage = 2;

  constructor(

    public dialogRef: MatDialogRef<EditUserComponent>,
    public userService: UserService,
    public formBuilder: FormBuilder,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }
  ngOnInit() {
    this.formEditUser = this.formBuilder.group({
      fullName: ['', [Validators.required, validateSpecialCharacters, validateWhitespace,
        Validators.maxLength(30), Validators.minLength(10)]],
      birthday: ['', [Validators.required, Validators.pattern(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)
        , this.userService.validateBirthday
        , this.userService.checkAge]],
      address: ['', [Validators.required, Validators.maxLength (255)]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, this.userService.validPhoneNumber]],
      gender: ['', [Validators.required]]
    });
    this.dataIdUser = this.data.dataE;
    console.log(this.dataIdUser);
    this.userService.getUserById(this.dataIdUser).subscribe(getData => {
      this.valueGender = getData.gender;
      this.formEditUser.patchValue(getData);
    });
  }
  editUser() {
    this.formEditUser.value.gender = this.valueGender;
    this.formEditUser.markAllAsTouched();
    console.log(this.formEditUser.value);
    this.userService.editUser(this.dataIdUser, this.formEditUser.value).subscribe(data => {
      if (data == null) {
      this.dialogRef.close();
      this.openDialogMessage();
      }
    });
  }
  valueGenderClick(value: boolean) {
    this.valueGender = value;
  }


  openDialogMessage() {
    const timeout = 3000;
    const dialogRef = this.dialog.open(MessageUserComponent, {
      width: '500px',
      height: '300px',
      data: {dataMessage: this.idMessage},
      disableClose: true
    });
    dialogRef.afterOpened().subscribe(_ => {
      setTimeout(() => {
        dialogRef.close();
      }, timeout);
    });
  }
}
