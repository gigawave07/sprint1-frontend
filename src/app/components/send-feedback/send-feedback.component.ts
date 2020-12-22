import {Component, ElementRef, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FeedbackService} from '../../service/feedback.service';

declare var $: any;

@Component({
  selector: 'app-send-feedback',
  templateUrl: './send-feedback.component.html',
  styleUrls: ['./send-feedback.component.css']
})
export class SendFeedbackComponent implements OnInit {

  formFeedBack: FormGroup;

  constructor(private el: ElementRef, private fb: FormBuilder, private feedbackService: FeedbackService) {
  }

  ngOnInit(): void {
    this.formFeedBack = this.fb.group({
      senderName: ['', Validators.required],
      senderEmail: ['', [Validators.required, Validators.email]],
      title: ['', Validators.required],
      content: ['', Validators.required]
    });

    $(document).ready(() => {
      $('#btn-submit-feedback-form').click(() => {
        $('.content-textbox').val('');
      });
    });
  }

  public sendFeedBack() {
    // ---------- autofocus ------------
    for (const key of Object.keys(this.formFeedBack.controls)) {
      if (this.formFeedBack.controls[key].invalid) {
        const invalidControl = this.el.nativeElement.querySelector('[formControlName="' + key + '"]');
        invalidControl.focus();
        break;
      }
    }
    // ----------------------------------
    // nhấn submit nhưng nếu chưa valid thì sẽ không submit được
    this.formFeedBack.markAllAsTouched();
    if (this.formFeedBack.valid) {
      this.feedbackService.sendFeedBack(this.formFeedBack.value).subscribe(data => {
        console.log(data);
        alert('Bạn đã gửi phản hồi thành công');
      });
    }
    // ----------------------------------
  }
}
