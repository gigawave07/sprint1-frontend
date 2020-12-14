import {Component, OnInit} from '@angular/core';
import {JwtStorageService} from '../../service/jwt-storage.service';
import {LoginService} from '../../service/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  username;

  constructor(public loginService: LoginService,
              public jwtStorageService: JwtStorageService) {
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
  }

  hello() {
    this.loginService.hello().subscribe(data => {
      alert(data.message);
    });
  }
}
