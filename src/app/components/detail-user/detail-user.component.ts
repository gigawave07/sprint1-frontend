import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user/user.service';
import {LoginService} from '../../service/login.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EditUserComponent} from '../edit-user/edit-user.component';
import {MatDialog} from '@angular/material';





@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  public users;
  public idUser;
  infoForm: FormGroup;
  constructor(
    public dialog: MatDialog,
    public userService: UserService,
    public loginService: LoginService,
    public formBuilder: FormBuilder) { this.idUser = this.loginService.currentUserValue.id; }

  ngOnInit(): void {
    this.userService.getUserById(this.idUser).subscribe(data => {
      console.log(this.idUser);
      console.log(data);
      this.users = data;
    }, error => {
      console.log('a');
    }, () => {
      this.infoForm.patchValue(this.users);
    });
    this.infoForm = this.formBuilder.group({
      address: [''],
      birthday: [''],
      email: [''],
      fullName: [''],
      gender: [''],
      phoneNumber: [''],
      userRank: [''],
    });
  }

  openDialogEdit() {
    this.idUser = this.loginService.currentUserValue.id;
    console.log(this.idUser);
    this.userService.getUserById(this.idUser).subscribe(dataEdit => {
      const dialogRef = this.dialog.open(EditUserComponent, {
      width: '900px',
      height: '600px',
      data: {dataE: dataEdit.id}
    });
      dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  });
  }
}
