import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-toppers',
  templateUrl: './toppers.component.html',
  styleUrls: ['./toppers.component.css'],
})
export class ToppersComponent implements OnInit {
  toppers: any[] = [];

  constructor(private db: AngularFireDatabase) {}

  ngOnInit() {
    this.db
      .list('/users', (ref) => ref.orderByChild('score').startAt(90))
      .valueChanges()
      .subscribe((toppers) => {
        this.toppers = toppers;
      });
  }
}
