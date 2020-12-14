import {Component, OnInit} from '@angular/core';
import {UserMessService} from '../../service/user-mess.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageService} from '../../service/message.service';
import * as io from 'socket.io-client';

declare var $: any;

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.css']
})
export class ConsultantComponent implements OnInit {
  // @ts-ignore
  // socket: SocketIOClient.Socket;
  room: any;
  formSendMess: FormGroup;

  listUser = [];

  constructor(private userMessService: UserMessService, private fb: FormBuilder, private messageService: MessageService) {
    // @ts-ignore
    // this.socket = io.connect('http://localhost:8080');
  }

  ngOnInit() {
    this.userMessService.getListUser().subscribe(data => {
        this.listUser = data.reverse();
      }
    );
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
      $('#sumit-consultant').click(function() {
        $('#content-chat-cons').val('');
      });
    });
  }

  sendMess() {
    if (this.formSendMess.value.content !== '') {
      this.formSendMess.value.roomId = this.room;
      console.log(this.formSendMess.value);
      this.messageService.sendMess(this.formSendMess.value).subscribe(data => {
        this.formSendMess.value.content = '';
      });
    }
  }

  getRoomId(roomId) {
    this.room = roomId;
  }
}
