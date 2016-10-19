import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';

import { TodoItem } from './interfaces/';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})

export class TodosComponent implements OnInit {
  private todos: FirebaseListObservable<TodoItem[]>;
  private todo: string = '';

  /**
   * Constructor of the class
   *
   * @param {ActivatedRoute}  activatedRoute
   */
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.todos = data['todos'];
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

  toggleStatus(item: TodoItem) {
    this.todos.update(
      item.$key,
      {
        done: item.done,
        updatedAt: firebase.database.ServerValue.TIMESTAMP,
      }
    );
  }

  remove(item: TodoItem) {
    this.todos.remove(item.$key);
  }
}
