import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {ActivatedRoute, Router} from '@angular/router';

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

  constructor(private router: Router) {
    firebase.database().ref('users/').on('value', (resp) => {
      this.listUser = snapshotToArray(resp).reverse();
      if (this.listUser.length === 0) {
        this.router.navigate(['/consultant']);
      }
    });
  }

  ngOnInit() {
    setInterval(() => {
      firebase.database().ref('user/').remove().then(() => {
      });
    }, 300000000);
  }

  deleteUser(key) {
    firebase.database().ref('users/').child(key).remove().then(() => {
      this.router.navigate(['/consultant']).then(() => {
      });
    });
  }

}
