import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../service/login.service';
import {AdminService} from '../../service/admin/admin.service';
import {MatDialog} from '@angular/material/dialog';
import {ChangePasswordAdminComponent} from '../change-password-admin/change-password-admin.component';

@Component({
  selector: 'app-get-check-password-admin',
  templateUrl: './get-check-password-admin.component.html',
  styleUrls: ['./get-check-password-admin.component.css']
})
export class GetCheckPasswordAdminComponent implements OnInit {
  public email;
  public admin;

  constructor(public loginService: LoginService,
              public adminService: AdminService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    // get username account
    this.email = this.loginService.currentUserValue.username;
    // show inf admin
    this.adminService.getAdminByEmailService(this.email).subscribe(data => {
      this.admin = data;
    });
  }

  openDialogCheckPassword(admin: any) {
    const dialogRef = this.dialog.open(ChangePasswordAdminComponent, {
      width: '800px',
      data: {dataAdmin: admin},
      disableClose: true
    });
  }
}
