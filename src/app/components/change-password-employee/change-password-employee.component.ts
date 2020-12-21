import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {EmployeeService} from '../../service/employee/employee.service';
import {LoginService} from '../../service/login.service';
import {ErrorStateMatcher} from '@angular/material/core';
import {ToastrService} from 'ngx-toastr';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);
    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-change-pasword-employee',
  templateUrl: './change-password-employee.component.html',
  styleUrls: ['./change-password-employee.component.css']
})
export class ChangePasswordEmployeeComponent implements OnInit {
  message: string;
  changePasswordForm: FormGroup;
  matcher = new MyErrorStateMatcher();
  public idEmployee;
  hide = true;
  validToken: string;

  constructor(
    public toast: ToastrService,
    public dialogRef: MatDialogRef<ChangePasswordEmployeeComponent>,
    private employeeService: EmployeeService,
    public loginService: LoginService,
    private formBuilder: FormBuilder) {
    this.changePasswordForm = this.formBuilder.group(
      {
        passwordOld: ['', [Validators.required, Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}')]],
        passwordNew: ['', [Validators.required, Validators.pattern('(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}')]],
        confirmPassword: ['', [Validators.required]],
        tokenCode: ['', [Validators.required]],
      }, {validator: this.checkPasswords});
  }

  checkPasswords(group: FormGroup) {
    const pass = group.controls.passwordNew.value;
    const confirmPass = group.controls.confirmPassword.value;
    return pass === confirmPass ? null : {notSame: true};
  }

  ngOnInit() {
    // this.idEmployee = this.loginService.currentUserValue.id;
    this.idEmployee = 1;
  }

  changePassword() {
    this.employeeService.changePasswordEmployee(this.idEmployee, this.changePasswordForm.value).subscribe(data => {
      if (data["result"] === 1 ) {
       this.toast.success('Đổi Mật Khẩu Thành Công', 'Thông Báo');
       this.dialogRef.close();
      } else {
        this.toast.warning('Đổi Mật Khẩu Thất Bại', 'Thông Báo');
      }
    });
  }
}
