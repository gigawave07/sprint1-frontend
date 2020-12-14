import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  readonly API = "http://localhost:8080/authenticate";
  readonly API2 = "http://localhost:8080/hello";
  name:Subject<string> = new Subject();

  broadcastLoginChange(text:string) {
    this.name.next(text);
  }

  constructor(public http: HttpClient) { }

  authenticate(user): Observable<any> {
    return this.http.post(this.API, user);
  }

  hello(): Observable<any> {
    return this.http.get(this.API2);
  }
}
