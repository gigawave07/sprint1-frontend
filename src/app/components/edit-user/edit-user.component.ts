import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {UserService} from '../../service/user/user.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public userOfId;
  public dataIdUser;
  formEdit: FormGroup;

  constructor(
    public activatedRoute: ActivatedRoute,
    public dialogRef: MatDialogRef<EditUserComponent>,
    public userService: UserService,
    public formBuilder: FormBuilder,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.formEdit = this.formBuilder.group({
      address: [''],
      birthday: [''],
      email: [''],
      fullName: [''],
      // gender: [''],
      phoneNumber: ['']
    });
    this.dataIdUser = this.data.dataE;
    console.log(this.dataIdUser);
    this.userService.getUserById(this.dataIdUser).subscribe(getData => {
      this.formEdit.patchValue(getData);
      console.log('--------edit-----------');
      console.log(getData);
      console.log('--------edit-----------');
    });
  }

  editUser() {
    this.formEdit.markAllAsTouched();
    console.log(this.formEdit.value);
    this.userService.editUser(this.dataIdUser, this.formEdit.value).subscribe(data => {
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
