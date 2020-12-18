import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EmployeeService} from '../../service/employee/employee.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {Employee} from '../../model/employee/employee.class';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  private formEdit: FormGroup;
  private pipe: DatePipe;
  private employee: Employee;
  private idNeed;
  private listRole: [];
  private maxDate = new Date(2012, 11, 16);
  private minDate = new Date (1920, 0, 1);

  constructor(
    public formBuilder: FormBuilder,
    public employeeService: EmployeeService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.pipe = new DatePipe('en-US');
    this.employeeService.getAllRole().subscribe(dataRole => {
      this.listRole = dataRole;
    });
    this.formEdit = this.formBuilder.group({
      id: [''],
      employeeCode: [''],
      fullName: ['',
        [Validators.required, this.employeeService.validateWhiteSpace,
          this.employeeService.validateSpecialCharacter, Validators.maxLength(40)
        ]],
      birthday: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      email: [''],
      password: ['123'],
      phoneNumber: ['', [Validators.required, Validators.pattern('^((\\d+){10})$'),
        Validators.maxLength(12)]],
      appAccount: [''],
      role: ['', [Validators.required]]
    });

    this.activatedRoute.params.subscribe(data => {
      this.idNeed = data.id;
      this.employeeService.findEmployeeByIdService(this.idNeed).subscribe(dataEdit => {
        this.formEdit.patchValue(dataEdit);
      });
    });
  }

  editEmployee() {
    this.employee = Object.assign({}, this.formEdit.value);
    this.employee.birthday = this.pipe.transform(this.employee.birthday, 'dd-MM-yyyy');
    this.employeeService.editEmployeeService(
      this.employee, this.employee.id).subscribe(data => {
      this.router.navigateByUrl('employee/listEmployee').then(_ => {
      });
    });
  }
}
