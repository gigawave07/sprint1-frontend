import {Component, OnInit} from '@angular/core';
import {ChangePasswordAdminComponent} from '../change-password-admin/change-password-admin.component';
import {MatDialog} from '@angular/material/dialog';
import {AdminService} from '../../service/admin/admin.service';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-get-token-email-admin',
  templateUrl: './get-token-email-admin.component.html',
  styleUrls: ['./get-token-email-admin.component.css']
})
export class GetTokenEmailAdminComponent implements OnInit {
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

  openDialogToken(admin): void {
    const dialogRef = this.dialog.open(ChangePasswordAdminComponent, {
      width: '800px',
      data: {dataAdmin: admin},
      disableClose: true
    });
  }
}
