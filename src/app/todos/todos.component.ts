import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';

import { TodoItem } from './interfaces/';
import { Animations, AnimationsService } from '../shared/';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})

export class TodosComponent extends Animations implements OnInit  {
  public todos: FirebaseListObservable<TodoItem[]>;
  public todo: string;

  /**
   * Constructor of the class
   *
   * @param {ActivatedRoute}    activatedRoute
   * @param {AnimationsService} animationsService
   */
  constructor(
    protected animationsService: AnimationsService,
    private activatedRoute: ActivatedRoute
  ) {
    super(animationsService);
  }

  public ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.todos = data['todos'];
    });
  }

  public addNewTodo() {
    const item = {
      todo: this.todo,
      done: false,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      updatedAt: firebase.database.ServerValue.TIMESTAMP,
    };

    this.todos.push(item);
    this.todo = '';
  }

  public toggleStatus(item: TodoItem) {
    this.todos.update(
      item.$key,
      {
        done: item.done,
        updatedAt: firebase.database.ServerValue.TIMESTAMP,
      }
    );
  }

  public remove(item: TodoItem) {
    this.todos.remove(item.$key);
  }
}
