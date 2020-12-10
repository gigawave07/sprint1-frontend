import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-send-feedback',
  templateUrl: './send-feedback.component.html',
  styleUrls: ['./send-feedback.component.css']
})
export class SendFeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {

    })
  }

}
