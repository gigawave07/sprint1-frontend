import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {AppAccount} from '../model/AppAccount';
import {JwtStorageService} from './jwt-storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly API = 'http://localhost:8080/authenticate';
  readonly API2 = 'http://localhost:8080/hello';
  name: Subject<string> = new Subject();
  private currentUserSubject: BehaviorSubject<AppAccount>;
  public currentUser: Observable<AppAccount>;

  broadcastLoginChange(text: string) {
    this.name.next(text);
  }

  constructor(public http: HttpClient,
              public jwtStorageService: JwtStorageService) {
    jwtStorageService.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(jwtStorageService.user);
    this.currentUserSubject = new BehaviorSubject<AppAccount>(jwtStorageService.user);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): AppAccount {
    return this.currentUserSubject.value;
  }

  authenticate(account): Observable<any> {
    return this.http.post<any>(this.API, account)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        console.log(user);
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.jwtStorageService.user = user;
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.jwtStorageService.user = null;
    this.currentUserSubject.next(null);
  }

  hello(): Observable<any> {
    return this.http.get(this.API2);
  }
}
