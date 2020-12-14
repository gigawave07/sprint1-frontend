import {Component, OnInit} from '@angular/core';
import {ConsultantService} from '../../service/consultant.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private consultantStatus = false;

  constructor(private consultantService: ConsultantService) {
  }

  ngOnInit() {
  }

  setConsultant() {
    this.consultantService.setConsultantStatus(true);
  }
}
