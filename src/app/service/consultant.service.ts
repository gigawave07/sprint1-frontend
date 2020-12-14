import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultantService {

  public consultantStatus = false;

  constructor() {
  }

  public setConsultantStatus() {
    this.consultantStatus = true;
    this.getConsultantStatus();
  }

  public getConsultantStatus() {
    return this.consultantStatus;
  }
}
