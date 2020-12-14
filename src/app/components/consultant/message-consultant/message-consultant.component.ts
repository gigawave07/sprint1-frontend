import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {MessageService} from '../../../service/message.service';

@Component({
  selector: 'app-message-consultant',
  templateUrl: './message-consultant.component.html',
  styleUrls: ['./message-consultant.component.css']
})
export class MessageConsultantComponent implements OnInit {

  listMessage = [];

  sub: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private messageService: MessageService) {
  }

  ngOnInit() {
    this.loadMess();
  }

  loadMess() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const room = paramMap.get('id');
      this.messageService.getMess(room).subscribe(data => {
        this.listMessage = data;
      });
    });
  }

}
