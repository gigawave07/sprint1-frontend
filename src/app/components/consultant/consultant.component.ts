import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

export const snapshotToArray = (snapshot: any) => {
  const returnArr = [];

  snapshot.forEach((childSnapshot: any) => {
    const item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });
  return returnArr;
};

@Component({
  selector: 'app-consultant',
  templateUrl: './consultant.component.html',
  styleUrls: ['./consultant.component.css']
})
export class ConsultantComponent implements OnInit {

  listUser = [];

  constructor() {
    firebase.database().ref('users/').on('value', (resp) => {
      this.listUser = snapshotToArray(resp).reverse();
    });
  }

  ngOnInit() {

  }


}
