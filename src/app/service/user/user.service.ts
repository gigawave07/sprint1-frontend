import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  public readonly API: string = 'http://localhost:8080/user';
  public readonly API_USER: string = 'http://localhost:8080/change';

  constructor(
    private http: HttpClient,
  ) {
  }

  getAllUser(): Observable<any> {
    return this.http.get(this.API);
  }

  getUserById(userId): Observable<any> {
    return this.http.get(this.API + '/detail/' + userId);
  }

  editUser(idUser, user): Observable<any> {
    return this.http.put(this.API + '/edit/' + idUser, user);
  }

  changePassword(idUser, password): Observable<any> {
    return this.http.put(this.API_USER + '/' + idUser + '/password', password);
  }
  validateBirthday(c: AbstractControl) {
    const chooseDate = new Date(c.value).getTime();
    const currentDate = new Date().getTime();
    return (chooseDate - currentDate >= 0) ?
      { chooseDateGreaterThanCurrentDate: true } : null;
  }
  checkAge: ValidatorFn = (control: FormControl): ValidationErrors | null => {
    const birthday = new Date(control.value);
    const timeBirth: number = birthday.getTime();
    const now = new Date().getTime();
    if (((now - timeBirth) / 365.25 / 24 / 60 / 60 / 1000) < 18) {
      return {checkAge: true};
    }
    return null;
  }
  validPhoneNumber: ValidatorFn = (control: FormControl): ValidationErrors | null => {
    const phoneRegex = /^0[35789]\d{8}$/;
    const characterRegex = /^[^\d]+$/;
    // tslint:disable-next-line:variable-name
    const _phoneNumber: string = control.value;
    if (_phoneNumber === '') {
      return null;
    }
    if (characterRegex.test(_phoneNumber)) {
      return {phoneAlpha: true};
    }
    if (!phoneRegex.test(_phoneNumber)) {
      return {format: true};
    }
    return null;
  }
}
