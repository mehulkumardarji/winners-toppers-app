import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.db
      .list('/users', (ref) => ref.orderByChild('age').endAt(20))
      .valueChanges()
      .subscribe((users) => {
        this.users = users;
      });
  }
}
