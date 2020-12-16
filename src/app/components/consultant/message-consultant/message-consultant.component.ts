import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {MessageService} from '../../../service/message.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-message-consultant',
  templateUrl: './message-consultant.component.html',
  styleUrls: ['./message-consultant.component.css']
})
export class MessageConsultantComponent implements OnInit {

  room: any;
  formSendMess: FormGroup;
  listMessage = [];

  sub: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private messageService: MessageService, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.loadMess();

    this.formSendMess = this.fb.group({
      id: '',
      content: ['', Validators.required],
      isUser: 'false',
      roomId: '',
      sendDate: '',
      status: '0'
    });
    // tslint:disable-next-line:only-arrow-functions
    $(document).ready(function() {
      // tslint:disable-next-line:only-arrow-functions
      $('#submit-consultant').click(function() {
        $('#content-chat-cons').val('');
      });
    });

    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.room = paramMap.get('id');
      this.loadMess();
    });

  }

  loadMess() {
    this.messageService.getMess(this.room).subscribe(data => {
      this.listMessage = data;
    });
  }

  sendMess() {
    if (this.formSendMess.value.content !== '') {
      this.formSendMess.value.roomId = this.room;
      this.messageService.sendMess(this.formSendMess.value).subscribe(data => {
        this.formSendMess.value.content = '';
        this.loadMess();
      });
    }
  }
}
