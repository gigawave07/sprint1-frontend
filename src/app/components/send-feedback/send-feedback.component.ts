import {Component, OnInit} from '@angular/core';
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

  constructor(private fb: FormBuilder, private feedbackService: FeedbackService) {
  }

  ngOnInit(): void {
    this.formFeedBack = this.fb.group({
      senderName: ['', Validators.required],
      senderEmail: ['', [Validators.required, Validators.email]],
      title: ['', Validators.required],
      content: ['', Validators.required]
    });

    // tslint:disable-next-line:only-arrow-functions
    $(document).ready(function() {

      $('#feedback-form').css('opacity', 0).animate({opacity: 1}, 4000);
      $('#direct-map').css('opacity', 0).animate({opacity: 1}, 4000);

      // tslint:disable-next-line:only-arrow-functions
      $('#btn-submit-feedback-form').click(function() {
        $('.content-textbox').val('');
      });
    });
  }

  public sendFeedBack() {
    this.formFeedBack.markAllAsTouched();
    if (this.formFeedBack.valid) {
      this.feedbackService.sendFeedBack(this.formFeedBack.value).subscribe(data => {
        console.log(data);
        alert('Bạn đã gửi phản hồi thành công');
      });
    }

  }

  setFocusName(isFocus: boolean) {

  }
}
