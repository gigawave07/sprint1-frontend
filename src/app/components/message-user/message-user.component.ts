import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-message-user',
  templateUrl: './message-user.component.html',
  styleUrls: ['./message-user.component.css']
})
export class MessageUserComponent implements OnInit {
  public messageUser;

  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<MessageUserComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit() {
    this.messageUser = this.data.dataMessage;
    const matDialogConfig: MatDialogConfig = new MatDialogConfig();
    matDialogConfig.position = {left: `40%`, top: `60px`};
    this.dialogRef.updatePosition(matDialogConfig.position);
  }

}
