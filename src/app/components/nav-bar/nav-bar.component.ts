import { Component, OnInit } from '@angular/core';
import {JwtStorageService} from "../../service/jwt-storage.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isAuthenticated = false;

  constructor(public jwtStorageService: JwtStorageService) { }

  ngOnInit() {
    this.isAuthenticated = this.jwtStorageService.isAuthenticated;
  }

}
