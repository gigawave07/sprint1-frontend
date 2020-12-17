import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {AdminService} from '../../service/admin/admin.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalid = !!(control && control.invalid && control.parent.touched);
    const invalidForm = !!(control && control.parent && control.parent.invalid && control.parent.touched);
    return (invalid || invalidForm);
  }
}

@Component({
  selector: 'app-change-password-admin',
  templateUrl: './change-password-admin.component.html',
  styleUrls: ['./change-password-admin.component.css']
})
export class ChangePasswordAdminComponent implements OnInit {
  public changePasswordForm: FormGroup;
  public username;
  public account;

  matcher = new MyErrorStateMatcher();

  constructor(public formBuilder: FormBuilder,
              public adminService: AdminService,
              public route: Router,
              public dialogRef: MatDialogRef<ChangePasswordAdminComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.changePasswordForm = this.formBuilder.group({
      passwordOld: ['',
        [
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
        ]
      ],
      passwordNew: ['',
        [
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
        ]
      ],
      confirmPassword: ['',
        [
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')
        ]
      ]
    }, {validator: this.checkPasswords});
  }

  checkPasswords(group: FormGroup) {
    const passwordNew = group.controls.passwordNew.value;
    const confirmPass = group.controls.confirmPassword.value;
    return passwordNew === confirmPass ? null : {notSame: true};
  }

  ngOnInit() {
    this.username = this.data.dataAdmin.email;
  }

  changePassword() {
    this.adminService.findAppAccountService(this.username).subscribe(dataAdmin => {
      this.account = {
        passwordOld: this.changePasswordForm.controls.passwordOld.value,
        passwordNew: this.changePasswordForm.controls.passwordNew.value
      };
      this.adminService.savePasswordAdminService(dataAdmin.username, this.account).subscribe(dataSavePassword => {
        this.dialogRef.close();
      });
      this.route.navigateByUrl('/admin/change-password-successfully');
    });
  }
}
