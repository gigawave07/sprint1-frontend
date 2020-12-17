import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {UserService} from '../../service/user/user.service';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

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
      birthday: ['', [Validators.required, Validators.pattern(/^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/),
        this.userService.validateBirthday, this.userService.checkAge]],
      address: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, this.userService.validPhoneNumber]],
      gender: ['', [Validators.required]]
    });
    this.dataIdUser = this.data.dataE;
    console.log(this.dataIdUser);
    this.userService.getUserById(this.dataIdUser).subscribe(getData => {
      this.valueGender = getData.gender;
      console.log(getData);
      this.formEditUser.patchValue(getData);
      console.log('--------edit-----------');
      console.log(getData);
      console.log('--------edit-----------');
    });
  }

  editUser() {
    this.formEditUser.value.gender = this.valueGender;
    this.formEditUser.markAllAsTouched();
    console.log(this.formEditUser.value);
    this.userService.editUser(this.dataIdUser, this.formEditUser.value).subscribe(data => {
      this.dialogRef.close();
    });
  }

  valueGenderClick(value: boolean) {
    this.valueGender = value;
  }
}
