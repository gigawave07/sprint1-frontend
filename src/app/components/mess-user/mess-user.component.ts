import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import * as firebase from 'firebase';
import {DatePipe} from '@angular/common';
import {MessageService} from '../../service/message.service';

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
  selector: 'app-mess-user',
  templateUrl: './mess-user.component.html',
  styleUrls: ['./mess-user.component.css']
})
export class MessUserComponent implements OnInit {


  public listMess = [];
  public listIcon = [];
  public room: string;
  formSend: FormGroup;
  formSendRequest: FormGroup;
  // firebase

  refUser = firebase.database().ref('users/');


  constructor(private fb: FormBuilder, private datePipe: DatePipe, private messageService: MessageService) {
  }

  ngOnInit() {
    this.getIcons();
    this.formSendRequest = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });

    this.formSend = this.fb.group({
      content: ['', Validators.required],
      isUser: 'true',
    });

    $(document).ready(() => {

      if ($('#is-request').val() !== 'true') {
        $('.openChatBtn').click(() => {
          $('.requiredChat').show('1000');
          $('.openChatBtn').hide();
        });
      } else {
        $('.openChatBtn').show();
      }
      $('.close').click(() => {
        $('.openChat').hide();
        $('.requiredChat').hide();
        $('.openChatBtn').show('1000');
        $('#is-request').val('false');
      }),
        $('.begin-chat').click(() => {
          $('.openChat').hide();
          $('.requiredChat').hide();
          $('.openChat').show('1000');
          $('#icon-box').hide();
        }),
        $('#icon').click(() => {
            $('#icon-box').toggle(500);
          }
        );
      $('#icon-upload-file').click(() => {
        $('#file-upload')[0].click();
      });
      $('#btn-submit-mess').click(() => {
        $('#content-mess').val('');
      });
    });
  }

  sendMessage() {
    const chat = this.formSend.value;
    chat.nickName = this.formSendRequest.value.name;
    chat.roomId = this.room;
    chat.sendDate = this.datePipe.transform(new Date(), 'đ/MM/yyyy HH:mm:ss');
    chat.type = 'message';
    const newMessage = firebase.database().ref('chats/').push();
    newMessage.set(chat);
    this.formSend = this.fb.group({
      content: ['', Validators.required],
      isUser: 'true',
    });
    firebase.database().ref('chats/').on('value', resp => {
      this.listMess = [];
      this.listMess = snapshotToArray(resp, this.room);
      // setTimeout(() => this.scrolltop = this.chatcontent.nativeElement.scrollHeight, 500);
    });
  }

  sendRequest() {
    const request = this.formSendRequest.value;
    request.roomId = request.phone + Math.round(Math.random() * 10000);
    this.room = request.roomId;
    this.refUser.orderByChild('name').equalTo(request.name).once('value', (snapshot) => {
      if (snapshot.exists()) {
        localStorage.setItem('name', request.name);
      } else {
        const newUser = firebase.database().ref('users/').push();
        newUser.set(request);
        localStorage.setItem('name', request.name);
      }
    });
  }

  getIcons() {
    this.messageService.getIcon().subscribe((data) => {
      this.listIcon = data;
    });
  }

}
