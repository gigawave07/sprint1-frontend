import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import {JwtStorageService} from "./jwt-storage.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(public jwtStorageService: JwtStorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.jwtStorageService.token; // you probably want to store it in localStorage or something

    if (req.headers.get("skip"))
      return next.handle(req);

    if (!token) {
      return next.handle(req);
    }

    const req1 = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    return next.handle(req1);
  }

}
