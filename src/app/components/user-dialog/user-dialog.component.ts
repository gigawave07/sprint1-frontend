import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {Router} from '@angular/router';
import {UserService} from '../../service/user/user.service';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.css']
})
export class UserDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<UserDialogComponent>,
              private loginService: LoginService,
              private route: Router) { }

  ngOnInit() {
    this.loginService.logout();
    this.route.navigateByUrl('/login');
  }

}
