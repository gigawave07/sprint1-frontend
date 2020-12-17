import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {UserService} from '../../service/user/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public userOfId;
  public dataIdUser;
  formEditUser: FormGroup;

  constructor(
    public activatedRoute: ActivatedRoute,
    public dialogRef: MatDialogRef<EditUserComponent>,
    public userService: UserService,
    public formBuilder: FormBuilder,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.formEditUser = this.formBuilder.group({
      address: ['', [Validators.required]],
      birthday: ['', [Validators.required]],
      email: ['', [Validators.required]],
      fullName: ['', [Validators.required, Validators.maxLength(30)]],
      gender: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]]
    });
    this.dataIdUser = this.data.dataE;
    console.log(this.dataIdUser);
    this.userService.getUserById(this.dataIdUser).subscribe(getData => {
      this.formEditUser.patchValue(getData);
      console.log('--------edit-----------');
      console.log(getData);
      console.log('--------edit-----------');
    });
  }

  editUser() {
    this.formEditUser.markAllAsTouched();
    console.log(this.formEditUser.value);
    this.userService.editUser(this.dataIdUser, this.formEditUser.value).subscribe(data => {
      this.dialogRef.close();
    });
    // this.activatedRoute.params.subscribe(data => {
    //   this.userOfId = data.id;
    //   this.userService.getUserById(this.userOfId).subscribe(data1 => {
    //     this.formEdit.patchValue(data1);
    //   });
    // });
  }
}
