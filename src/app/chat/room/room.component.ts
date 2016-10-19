import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdInput } from '@angular/material';
import { FirebaseListObservable } from 'angularfire2';
import { LocalStorageService } from 'ng2-webstorage';

import { ChatItem, Resolves } from './interfaces/';

@Component({
  selector: 'app-chat-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})

export class RoomComponent implements OnInit {
  @ViewChild('messageControl') messageControl: MdInput;

  private messages: FirebaseListObservable<ChatItem[]>;
  private nick: string = '';
  private message: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: Resolves) => {
      this.messages = data.messages;
      this.nick = data.nick;
    });

    this.messageControl.focus();
  }

  addNewMessage() {
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
