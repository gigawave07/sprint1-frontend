import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FeedbackSearch} from './model/feedbackSearch';
import {Observable} from 'rxjs';
import {Feedback} from './model/feedback';
import {Page} from './model/page';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private readonly API = 'http://localhost:8080/feedback';

  constructor(private http: HttpClient) { }

  private options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
    // responseType: 'text' as 'json'
  };


  // tslint:disable-next-line:ban-types
  getFeedbackHttpOptions(searchField: FeedbackSearch, page: number): Object {
    const feedback = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      params: {
        senderName: searchField.senderName,
        sendDate: searchField.sendDate,
        processStatus: searchField.processStatus,
        page
      }
    };
    return feedback;
  }


  getFeedbackPage(searchField: FeedbackSearch, page: number): Observable<Page<Feedback>> {
    return this.http.get<Page<Feedback>>(`${this.API}/feedback-page` , this.getFeedbackHttpOptions(searchField, page));
  }

  getFeedbackList(): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.API}/feedback-list`, this.options);
  }


  getSendMail(feedback, id): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(this.API + '/feedback-send' + '/' + id);
  }
}

