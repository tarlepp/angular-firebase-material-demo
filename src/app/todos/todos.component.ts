import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase'; // This is needed for 'firebase.database.ServerValue.TIMESTAMP' to work

import { ITodoItem } from './interfaces/';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {
  private todos: FirebaseListObservable<ITodoItem[]>;
  private todo: string = '';

  /**
   * Constructor of the class
   *
   * @param {ActivatedRoute}  activatedRoute
   */
  constructor(private activatedRoute: ActivatedRoute) { }

  public ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.todos = data['todos'];
    });
  }

  public addNewTodo() {
    let item = {
      todo: this.todo,
      done: false,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      updatedAt: firebase.database.ServerValue.TIMESTAMP,
    };

    this.todos.push(item);
    this.todo = '';
  }

  public toggleStatus(item: ITodoItem) {
    this.todos.update(
      item.$key,
      {
        done: item.done,
        updatedAt: firebase.database.ServerValue.TIMESTAMP,
      }
    );
  }

  public remove(item: ITodoItem) {
    this.todos.remove(item.$key);
  }
}
