import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Feedback} from '../../service/model/feedback';
import {Observable} from 'rxjs';
import {FeedbackSearch} from '../../service/model/feedbackSearch';
import {FeedbackService} from '../../service/feedback.service';
import {HttpClient} from '@angular/common/http';
import {MatDialog} from '@angular/material';
import {FeedbackContentComponent} from '../feedback-content/feedback-content.component';
import {map, tap} from 'rxjs/operators';

@Component({
  selector: 'app-feedback-list',
  templateUrl: './feedback-list.component.html',
  styleUrls: ['./feedback-list.component.css']
})
export class FeedbackListComponent implements OnInit {
  private formSearchList: FormGroup;
  feedback: Feedback = null;
  feedbackPage: Observable<Feedback[]>;
  feedbackList: Feedback[];
  lastPage: number;
  currentPage: number;
  pageSize = 4;
  totalElements: number;
  isEmpty = false;
  stt: number[];
  unprocessedStatusAmount = 0;
  private searchFields: FeedbackSearch = {} as FeedbackSearch;

  constructor(private feedbackService: FeedbackService,
              private httpClient: HttpClient,
              public dialog: MatDialog,
              public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formSearchList = this.formBuilder.group({
      senderName: [''],
      sendDate: [''],
      processStatus: [''],
    });
    this.getAllFeedbackPage(1);
    this.getAllFeedback();
  }

  search() {
    this.searchFields = this.formSearchList.value as FeedbackSearch;
    console.log(this.searchFields.sendDate);
    this.getAllFeedbackPage(1);
  }


  getAllFeedbackPage(pageNumber) {
    this.feedbackPage = this.feedbackService.getFeedbackPage(this.searchFields, pageNumber).pipe(
      tap(res => {
        console.log(res);
        this.totalElements = res.totalElements;
        this.pageSize = res.size;
        this.currentPage = pageNumber;
        this.stt = [];
        const firstIndex = this.pageSize * (this.currentPage - 1) + 1;
        const lastIndex = this.pageSize * this.currentPage;
        for (let i = firstIndex; i <= lastIndex; i++) {
          this.stt.push(i);
        }
        this.isEmpty = false;
        if (res.content.length === 0) {
          this.isEmpty = true;
        }
      }, error => {
        console.log(error);
        console.log('vào được err của tap');
      }),
      map(res => res.content)
    );
  }

  getAllFeedback(): void {
    this.feedbackService.getFeedbackList().subscribe(data => {
      this.feedbackList = data;
      console.log(data);
      for (let i = 0; i < this.feedbackList.length; i++) {
        if (this.feedbackList[i].processStatus === false) {
          this.unprocessedStatusAmount++;
        }
      }
    });
  }

  setColorFieldStatusOfProcessStatus(status) {
    if (status === false) {
      return 'text-danger';
    } else if (status === true) {
      return 'text-muted';
    }
  }



  openFeedbackDialog(feedback): void {
    this.feedback = feedback;
    const dialogRef = this.dialog.open(FeedbackContentComponent, {
      width: '700px',
      data: {data1: this.feedback},
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(this.feedback);
      this.ngOnInit();
    });
  }
}
