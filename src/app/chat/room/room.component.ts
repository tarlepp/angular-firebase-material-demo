import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2';
import { LocalStorageService } from 'ng2-webstorage';

import { ChatItem } from './chat-item.interface';

@Component({
  selector: 'app-chat-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})

export class RoomComponent implements OnInit {
  private messages: FirebaseListObservable<ChatItem[]>;
  private nick: string = '';
  private message: string = '';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.messages = data['messages'];
      this.nick = data['nick'];
    });
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
