import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {EmployeeService} from '../../service/employee/employee.service';
import {DeleteEmployeeComponent} from '../delete-employee/delete-employee.component';


@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {
  private list;
  private checkList = 'true';
  key: string;
  p: number;

  constructor(
    private employeeService: EmployeeService,
    private dialog: MatDialog,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.employeeService.getAllEmployeeService().subscribe(data => {
      this.list = data;
    }, () => {
        const NOTICE = 'Không tìm thấy trang ';
        this.router.navigate(['message-notice-employee', {message: NOTICE}]).then(r => {});
      },
      () => {
      });
  }

  openDialogDelete(id: any): void {
    this.employeeService.findEmployeeByIdService(id).subscribe(varialble => {
      const dialogRef = this.dialog.open(DeleteEmployeeComponent, {
        width: '750px',
        data: {dataNeed: varialble},
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
      });
    });
  }

  searchEmployee(key: string, attribute: any) {
    if (attribute === 'fullName' && key !== '') {
      this.employeeService.searchEmployeeFullNameService(key).subscribe(data => {
        this.list = data;
        if (this.list.length === 0) {
          this.checkList = 'false';
        }
      });
    } else if (attribute === 'email' && key !== '') {
      this.employeeService.searchEmployeeEmailService(key).subscribe(data => {
        this.list = data;
        if (this.list.length === 0) {
          this.checkList = 'false';
        }
      });
    } else if (attribute === 'phoneNumber' && key !== '') {
      this.employeeService.searchEmployeePhoneNumberService(key).subscribe(data => {
        this.list = data;
        if (this.list.length === 0) {
          this.checkList = 'false';
        }
      });
    } else if (attribute === 'choose' || this.key === '') {
      this.employeeService.getAllEmployeeService().subscribe(data => {
        this.ngOnInit();
        if (this.list.length === 0) {
          this.checkList = 'false';
        }
      });
    } else if (attribute !== 'choose' && key === '') {
      this.employeeService.getAllEmployeeService().subscribe(data => {
        this.ngOnInit();
      });
    }
  }

  resetFind() {
    this.key = '';
    this.checkList = 'true';
    this.ngOnInit();
  }
}
