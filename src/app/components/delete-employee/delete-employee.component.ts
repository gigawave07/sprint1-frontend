import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {EmployeeService} from '../../service/employee/employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  public employee;
  private idDelete: any;

  constructor(
    public dialogRef: MatDialogRef<DeleteEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.employee = this.data.dataNeed;
    this.idDelete = this.data.dataNeed.id;
  }

  deleteEmployee() {
    this.employeeService.deleteEmployeeService(this.idDelete).subscribe(data => {
      this.dialogRef.close();
    });
  }
}
