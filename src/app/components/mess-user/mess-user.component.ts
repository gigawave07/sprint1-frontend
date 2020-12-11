import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

declare var $: any;

@Component({
  selector: 'app-mess-user',
  templateUrl: './mess-user.component.html',
  styleUrls: ['./mess-user.component.css']
})
export class MessUserComponent implements OnInit {

  formSend: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    // tslint:disable-next-line:only-arrow-functions

    this.formSend = this.fb.group({
      id: '',
      content: '',
      sendDate: new Date(),
    });
    // tslint:disable-next-line:only-arrow-functions
    // $(document).ready(function() {
    //   const content = '';
    //   $('#file-upload').hide();
    //
    //   // tslint:disable-next-line:only-arrow-functions
    //   $('.openChatBtn').click(function() {
    //     $('.requiredChat').show('1000');
    //     $('.openChatBtn').hide();
    //   });
    //   // tslint:disable-next-line:only-arrow-functions
    //   $('.close').click(function() {
    //     $('.openChat').hide();
    //     $('.requiredChat').hide();
    //     $('.openChatBtn').show('1000');
    //   });
    //   // tslint:disable-next-line:only-arrow-functions
    //   $('.begin-chat').click(function() {
    //     $('.openChat').hide();
    //     $('.requiredChat').hide();
    //     $('.openChat').show('1000');
    //     $('#icon-box').hide();
    //   });
    //   // tslint:disable-next-line:only-arrow-functions
    //   $('#icon').click(function() {
    //     $('#icon-box').toggle('500');
    //   });
    //
    //   // tslint:disable-next-line:only-arrow-functions
    //   $('#icon-upload-file').click(function() {
    //     $('#file-upload')[0].click();
    //   });
    //
    // });

    // tslint:disable-next-line:only-arrow-functions
    $(document).ready(function() {

      $('#file-upload').hide();

      // tslint:disable-next-line:only-arrow-functions
      $('.openChatBtn').click(function() {
        $('.requiredChat').show('1000');
        $('.openChatBtn').hide();
      }),
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

    });
  }

  sendMessage() {

  }
}
