import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user/user.service';





@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  public users;
  public idUser = 1;
  // infoForm: FormGroup;
  // updateForm: FormGroup;
  constructor(
    public userService: UserService,
    // public formBuilder: FormBuilder,
    // private activatedRoute: ActivatedRoute,
    // public router: Router,
  ) {
  }

  ngOnInit(): void {
    this.userService.getUserById(this.idUser).subscribe(data => {
      this.users = data;
      console.log(this.idUser);
    });
    // this.infoForm = this.formBuilder.group({
    //   address: [''],
    //   birthday: [''],
    //   email: [''],
    //   fullName: [''],
    //   gender: [''],
    //   phone_number: [''],
    //   user_rank: [''],
    // });
    // this.activatedRoute.params.subscribe(data => {
    //   this.userOfId = data.id;
    //   this.userService.getUserById(this.userOfId).subscribe(data1 => {
    //     this.formDetailUser.patchValue(data1);
    //   });
    // });
    // this.userService.getUserById(data => {
    //   this.userOfId = data;
    // });
  }

}
