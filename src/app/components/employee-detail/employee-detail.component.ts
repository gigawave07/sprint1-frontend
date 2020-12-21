import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../service/login.service';
import {EmployeeService} from '../../service/employee/employee.service';
import {MatDialog} from '@angular/material/dialog';
import {ChangePasswordEmployeeComponent} from '../change-password-employee/change-password-employee.component';
import {toPromise} from "rxjs-compat/operator/toPromise";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  public idEmployee = 1;
  public employee;
  constructor(
    public loginService: LoginService,
    public employeeService: EmployeeService,
    public dialog: MatDialog,
  ) { }


  async ngOnInit() {
    // // get Id Employee
    // this.idEmployee = this.loginService.currentUserValue.id;
    // // find Employee By Id
    this.employeeService.findEmployeeByIdService(this.idEmployee).toPromise().then(value => {
      this.employee = value;
      console.log(this.employee);
    });
  }
  openDialogChangePass(employee): any {
    this.employeeService.sendToEmailEmployee(this.idEmployee).subscribe();
    // @ts-ignore
    const dialogRef = this.dialog.open(ChangePasswordEmployeeComponent, {
      width: '650px',
      data: {dataEmployee: employee},
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }
}
