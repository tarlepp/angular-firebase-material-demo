import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';
import { LocalStorageService } from 'ng2-webstorage';

import { ChatItem, Resolves } from './interfaces/';
import { Animations, AnimationsService } from '../../shared/';

@Component({
  selector: 'app-chat-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})

export class RoomComponent extends Animations implements OnInit {
  @ViewChild('messageControl') messageControl: any;

  public messages: FirebaseListObservable<ChatItem[]>;
  public message: string;
  private nick: string;

  /**
   * Constructor of the class
   *
   * @param {AnimationsService}   animationsService
   * @param {Router}              router
   * @param {ActivatedRoute}      activatedRoute
   * @param {LocalStorageService} localStorage
   */
  public constructor(
    protected animationsService: AnimationsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private localStorage: LocalStorageService
  ) {
    super(animationsService);
  }

  /**
   * ngOnInit lifecycle hook.
   *
   * @see https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
   */
  public ngOnInit() {
    this.activatedRoute.data.subscribe((data: Resolves) => {
      this.messages = data.messages;
      this.nick = data.nick;
    });

    // this.messageControl.focus();
  }

  /**
   * Method to add new message to chat.
   *
   * Special cases for messages:
   *  Message   Action
   *  /quit     Quits from chat room and redirect to chat entry
   */
  public addNewMessage() {
    if (this.message === '/quit') {
      this.localStorage.clear('nick');

      this.router.navigateByUrl('/chat/entry');

      return;
    }

    this.messages.push({
      nick: this.nick,
      message: this.message,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
    });

    this.message = '';
  }
}
