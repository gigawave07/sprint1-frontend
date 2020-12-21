import {Component, Inject, OnInit} from '@angular/core';
import {Feedback} from '../../service/model/feedback';
import {FormControl, FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FeedbackService} from '../../service/feedback.service';

@Component({
  selector: 'app-feedback-content',
  templateUrl: './feedback-content.component.html',
  styleUrls: ['./feedback-content.component.css']
})
export class FeedbackContentComponent implements OnInit {

  feedback: Feedback = null;
  public id;
  public title;
  public sendDate;
  public senderEmail;
  public senderName;
  public processStatus;
  public content;
  feedbackList: Feedback[];
  unprocessedStatusAmount = 0;
  sendMailForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<FeedbackContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public feedbackService: FeedbackService
  ) { }

  ngOnInit() {
    this.sendMailForm = new FormGroup({
      responseContent: new FormControl(''),
    });
    this.id = this.data.data1.id;
    this.title = this.data.data1.title;
    this.sendDate = this.data.data1.sendDate;
    this.senderEmail = this.data.data1.senderEmail;
    this.senderName = this.data.data1.senderName;
    this.content = this.data.data1.content;
    this.processStatus = this.data.data1.processStatus;
  }

  check(id: number) {
    this.feedbackService.getSendMail(this.feedback, id).subscribe(
    );
  }

}
