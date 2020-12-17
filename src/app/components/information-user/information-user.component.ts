import { Component, OnInit } from '@angular/core';
import {ChangePasswordUserComponent} from '../change-password-user/change-password-user.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-information-user',
  templateUrl: './information-user.component.html',
  styleUrls: ['./information-user.component.css']
})
export class InformationUserComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }
  openDialogChangePassword() {
    const dialogRef = this.dialog.open(ChangePasswordUserComponent, {
      width: '900px',
      height: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

}
