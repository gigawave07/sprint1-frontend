import {Component, OnInit} from '@angular/core';
import {UserMessService} from '../../service/user-mess.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MessageService} from '../../service/message.service';


@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.css']
})
export class ConsultantComponent implements OnInit {

  listUser = [];

  constructor(private userMessService: UserMessService, private fb: FormBuilder, private messageService: MessageService) {

  }

  ngOnInit() {

    this.getListUser();
  }

  getListUser() {
    this.userMessService.getListUser().subscribe(data => {
        this.listUser = data.reverse();
      }
    );
  }
}
