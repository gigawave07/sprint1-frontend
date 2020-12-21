import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {PassengerService} from '../../service/passenger/passenger.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-delete-passenger',
  templateUrl: './delete-passenger.component.html',
  styleUrls: ['./delete-passenger.component.css']
})
export class DeletePassengerComponent implements OnInit {
  public eleName;
  public eleId;

  constructor(public dialogRef: MatDialogRef<DeletePassengerComponent>,
              @Inject(MAT_DIALOG_DATA)
              public data: any,
              public passengerService: PassengerService,
              private router: Router) { }

  ngOnInit() {
    console.log(this.data.data1);
    this.eleName = this.data.data1.fullName;
    this.eleId = this.data.data1.id;
  }

  deleteOnClick() {
    this.passengerService.delete(this.eleId).subscribe(data => {
      this.router.navigate(['/passenger/list-Passenger'], {queryParams: {delete_msg: 'Delete successfully!', si: true}});
      this.dialogRef.close();
    });
  }

}
