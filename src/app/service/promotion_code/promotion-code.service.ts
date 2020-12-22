import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionCodeService {
  public readonly API: string = 'http://localhost:8080/promotion';

  constructor(
    public http: HttpClient
  ) {
  }

  findAllPromotionCode(): Observable<any> {
    return this.http.get(this.API + '/getAll');
  }

  sendEmail(email: any): Observable<any> {
    let params = new HttpParams();
    params = params.append('emailPassages', email);
    return this.http.get(this.API + '/sendEmail' , {params});
  }

}
