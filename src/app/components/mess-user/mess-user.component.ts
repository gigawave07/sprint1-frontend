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
  private consultant: boolean;
  public listMess = [];

  formSend: FormGroup;
  formSendRequest: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageService, private consultantService: ConsultantService) {
  }

  ngOnInit() {

    setInterval(() => {
      this.consultant = this.consultantService.getConsultantStatus();
    }, 1000);

    this.loadMess();

    this.formSendRequest = this.fb.group({
      name: '',
      email: '',
      phone: ''
    });

    this.formSend = this.fb.group({
      id: '',
      content: ['', Validators.required],
      sendDate: '',
      status: '0',
    });

    // tslint:disable-next-line:only-arrow-functions
    $(document).ready(function() {

      $('#file-upload').hide();

      // tslint:disable-next-line:only-arrow-functions
      $('.openChatBtn').click(function() {
        $('.requiredChat').show('1000');
        $('.openChatBtn').hide();
      });

      // tslint:disable-next-line:only-arrow-functions
      $('.close').click(function() {
        $('.openChat').hide();
        $('.requiredChat').hide();
        $('.openChatBtn').show('1000');
      }),
        // tslint:disable-next-line:only-arrow-functions
        $('.begin-chat').click(function() {
          $('.openChat').hide();
          $('.requiredChat').hide();
          $('.openChat').show('1000');
          $('#icon-box').hide();
        }),
        // tslint:disable-next-line:only-arrow-functions
        $('#icon').click(function() {
          $('#icon-box').toggle('500');
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
    this.messageService.sendMess(this.formSend.value).subscribe(data => {
      this.loadMess();
    });
  }

  sendRequest() {
    console.log(this.formSendRequest.value);
    this.messageService.sendRequestChat(this.formSendRequest.value).subscribe(data => {
    });
  }

  loadMess() {
    this.messageService.getMess().subscribe(data => {
      this.listMess = data;
    });
  }
}
