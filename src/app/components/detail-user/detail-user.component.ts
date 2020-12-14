import {Component, OnInit} from '@angular/core';
import {UserService} from '../../service/user/user.service';
import {LoginService} from '../../service/login.service';
import {FormBuilder, FormGroup} from '@angular/forms';





@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  public users;
  public idUser;
  infoForm: FormGroup;
  constructor(
    public userService: UserService,
    public loginService: LoginService,
    public formBuilder: FormBuilder,
  ) {
    this.idUser = this.loginService.currentUserValue.id;
  }

  ngOnInit(): void {
    this.userService.getUserById(this.idUser).subscribe(data => {
      console.log(this.idUser);
      console.log(data);
      this.users = data;
      this.infoForm = this.formBuilder.group({
        address: [''],
        birthday: [''],
        email: [''],
        fullName: [''],
        gender: [''],
        phone_number: [''],
        user_rank: [''],
      });
      this.infoForm.patchValue(this.users);
    });

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

  submit() {

  }
}
