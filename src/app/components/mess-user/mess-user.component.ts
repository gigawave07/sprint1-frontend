import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageService} from '../../service/message.service';
import {ConsultantService} from '../../service/consultant.service';

declare var $: any;

@Component({
  selector: 'app-mess-user',
  templateUrl: './mess-user.component.html',
  styleUrls: ['./mess-user.component.css']
})
export class MessUserComponent implements OnInit {


  public isRequest = false;
  public listMess = [];
  public room: string;
  formSend: FormGroup;
  formSendRequest: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageService, private consultantService: ConsultantService) {

  }

  ngOnInit() {
    this.loadMess();

    this.formSendRequest = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
    this.formSend = this.fb.group({
      id: '',
      content: ['', Validators.required],
      roomId: '',
      isUser: 'true',
      sendDate: '',
      status: '0',
    });
    // tslint:disable-next-line:only-arrow-functions
    $(document).ready(function() {
      if ($('#is-request').val() !== 'true') {
        // tslint:disable-next-line:only-arrow-functions
        $('.openChatBtn').click(function() {
          $('.requiredChat').show('1000');
          $('.openChatBtn').hide();
        });
      } else {
        $('.openChatBtn').show();
      }
      // tslint:disable-next-line:only-arrow-functions
      $('.close').click(function() {
        $('.openChat').hide();
        $('.requiredChat').hide();
        $('.openChatBtn').show('1000');
        $('#is-request').val('false');
      }),
        // tslint:disable-next-line:only-arrow-functions
        $('.begin-chat').click(function() {
          $('.openChat').hide();
          $('.requiredChat').hide();
          $('.openChat').show('1000');
          $('#icon-box').hide();
        }),
        // tslint:disable-next-line:only-arrow-functions
        $('#icon-upload-file').click(function() {
          $('#file-upload')[0].click();
        });
      // tslint:disable-next-line:only-arrow-functions
      $('#btn-submit-mess').click(function() {
        $('#content-mess').val('');
      });
    });
  }

  sendMessage() {
    if (this.formSend.value.content !== '') {
      this.formSend.value.roomId = this.room;
      this.messageService.sendMess(this.formSend.value).subscribe(data => {
        this.formSend.value.content = '';
        this.loadMess();
      });
    }
  }

  sendRequest() {
    this.messageService.sendRequestChat(this.formSendRequest.value).subscribe(data => {
      this.isRequest = true;
      this.room = data;
    });
  }

  loadMess() {
    if (this.isRequest) {
      this.messageService.getMess(this.room).subscribe(data => {
        this.listMess = data;
      });
    }
  }
}
