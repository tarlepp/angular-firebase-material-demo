import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

interface todoItem {
  $key: string,
  todo: string,
  done: boolean,
  createdAt: number,
  updatedAt: number,
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
  private todos: FirebaseListObservable<todoItem[]>;
  private todo: string = '';

  constructor(
    public af: AngularFire,
    public router: Router
  ) { }

  ngOnInit() {
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.todos = this.af.database.list('/todos/' +  auth.uid);
      } else {
        this.router.navigateByUrl('/login');
      }
    });
  }

  addNewTodo() {
    let item = {
      todo: this.todo,
      done: false,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      updatedAt: firebase.database.ServerValue.TIMESTAMP,
    };

    this.todos.push(item);
    this.todo = '';
  }

  toggleStatus(item: todoItem) {
    this.todos.update(
      item.$key,
      {
        done: item.done,
        updatedAt: firebase.database.ServerValue.TIMESTAMP,
      }
    );
  }
}
