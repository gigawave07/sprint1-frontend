import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {EmployeeService} from '../../service/employee/employee.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  private employee;
  private idDelete: any;

  constructor(
    public dialogRef: MatDialogRef<DeleteEmployeeComponent>,
    private employeeService: EmployeeService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.employee = this.data.dataNeed;
    this.idDelete = this.data.dataNeed.id;
  }

  deleteEmployee() {
    this.employeeService.deleteEmployeeService(this.idDelete).subscribe(data => {
      if (data == null) {
        this.dialogRef.close();
      }
    });
  }
}
