import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../service/login.service';
import {finalize} from "rxjs/operators";
import {SpinnerOverlayService} from "../../service/animations/spinner-overlay.service";
import {ChangePasswordUserComponent} from '../change-password-user/change-password-user.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  currentUser;
  constructor(public loginService: LoginService,
              public spinnerOverlayService: SpinnerOverlayService,
              public dialog: MatDialog) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loginService.name.subscribe(val => {
      this.currentUser = val;
    });
  }

  logout() {
    this.loginService.logout();
    this.currentUser = null;
    this.loginService.broadcastLoginChange(this.currentUser);
  }

  hello() {
    this.spinnerOverlayService.show();
    this.loginService.hello()
      .pipe(finalize(() => this.spinnerOverlayService.hide()))
      .subscribe(data => {
      alert(this.loginService.currentUserValue.id);
    });
  }

  openDialogChangePassword() {
    const dialogRef = this.dialog.open(ChangePasswordUserComponent, {
      width: '1000px',
      height: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }
}
