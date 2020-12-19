import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {MessageService} from '../../../service/message.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as firebase from 'firebase';
import {DatePipe} from '@angular/common';

declare var $: any;

export const snapshotToArray = (snapshot: any, room: any) => {
  const returnArr = [];

  snapshot.forEach((childSnapshot: any) => {
    const item = childSnapshot.val();
    if (item.roomId === room) {
      item.key = childSnapshot.key;
      returnArr.push(item);
    }
  });
  return returnArr;
};

@Component({
  selector: 'app-message-consultant',
  templateUrl: './message-consultant.component.html',
  styleUrls: ['./message-consultant.component.css']
})
export class MessageConsultantComponent implements OnInit {

  lastMessage: string;
  room: string;
  formSendMess: FormGroup;
  listMessage = [];
  listIcon = [];

  sub: Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private messageService: MessageService,
              private fb: FormBuilder,
              private datePipe: DatePipe) {
  }

  ngOnInit() {
    this.getIcons();
    this.formSendMess = this.fb.group({
      content: ['', Validators.required],
      isUser: ''

    });
    $(document).ready(() => {
      $('#icon-box-consultant').hide();
      $('#submit-consultant').click(() => {
        $('#content-chat-cons').val('');
      });
      $('#consultant-icon').click(() => {
          console.log('đã nhấn icon');
          $('#icon-box-consultant').toggle(500);
        }
      );
    });

    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.room = paramMap.get('id');
      firebase.database().ref('chats/').on('value', (resp) => {
        this.listMessage = snapshotToArray(resp, this.room);
      });
    });

  }

  sendMess() {
    const chat = this.formSendMess.value;
    chat.nickName = 'admin';
    chat.roomId = this.room;
    chat.isUser = 'false';
    chat.sendDate = this.datePipe.transform(new Date(), 'dd/MM/yyyy HH:mm:ss');
    chat.type = 'message';
    const newMessage = firebase.database().ref('chats/').push();
    newMessage.set(chat);
    this.formSendMess = this.fb.group({
      content: ['', Validators.required],
      isUser: '',
    });
  }

  getIcons() {
    this.messageService.getIcon().subscribe((data) => {
      this.listIcon = data;
    });
  }
}
