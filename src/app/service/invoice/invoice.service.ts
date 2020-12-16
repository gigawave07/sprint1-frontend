import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private API_INVOICE = 'http://localhost:8080/invoice';

  constructor(private http: HttpClient) {
  }

  findAllInvoice(): Observable<any> {
    return this.http.get(this.API_INVOICE + '/list');
  }

  findInvoiceById(idInvoice: any): Observable<any> {
    return this.http.get(this.API_INVOICE + '/findByInvoiceId/' + idInvoice);
  }
}
