import {Component, OnInit} from '@angular/core';
import {JwtStorageService} from '../../service/jwt-storage.service';
import {LoginService} from '../../service/login.service';
import {ChangePasswordUserComponent} from '../change-password-user/change-password-user.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  username;

  constructor(public loginService: LoginService,
              public jwtStorageService: JwtStorageService,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.loginService.name.subscribe(val => {
      this.username = val;
    });
  }

  logout() {
    this.username = '';
    this.jwtStorageService.isAuthenticated = false;
    this.jwtStorageService.token = '';
    this.loginService.logout();
    this.loginService.broadcastLoginChange(this.username);
  }

  hello() {
    this.loginService.hello().subscribe(data => {
      alert(this.loginService.currentUserValue.id);
    });
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
