import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThongKeApiService {
  public API = 'http://localhost:8080/statistic';
  public statisticAPI = 'http://localhost:8080/reportStatisticResult';
  constructor(
    public http: HttpClient
  ) { }
  // @ts-ignore
  getAllStatistic(): Observable<any>{
    return this.http.get(this.API);
  }
  // @ts-ignore
  findStatisticByID(idStatistic): Observable<any>{
    return this.http.get(this.API + '/' + idStatistic);
  }
  // @ts-ignore
  getAllStatisticUpdate(): Observable<any>{
    return this.http.get(this.statisticAPI);
  }
  // @ts-ignore
  findStatisticByIDUpdate(idStatistic): Observable<any>{
    return this.http.get(this.statisticAPI + '/' + idStatistic);
  }
}
