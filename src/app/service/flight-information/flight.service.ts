import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private apiSearch = 'http://localhost:8080/flightInformation/search';
  private apiById = 'http://localhost:8080/flightInformation/findByID/';

  constructor(private http: HttpClient) {
  }

  // @ts-ignore
  search(page, departure, arrival, departureDate, sort): Observable<any> {
    return this.http.get(this.apiSearch + '?page=' + page + '&departure=' + departure + '&arrival=' + arrival + '&departureDate=' +
      departureDate + '&sort=' + sort);
  }

  getById(id): Observable<any> {
    return this.http.get(this.apiById + id);
  }
}
