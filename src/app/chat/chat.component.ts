import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import * as firebase from 'firebase';
import { ViewChild } from '@angular/core/src/metadata/di';
import { Observable } from 'rxjs';

interface chatItem {
  $key: string,
  nick: string,
  message: string,
  createdAt: number,
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})

export class ChatComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  private items: Observable<any[]>;
  private nick: string = '';
  private message: string = '';

  constructor(
    public af: AngularFire,
    public router: Router
  ) { }

  ngOnInit() {
    this.af.auth.subscribe(auth => {
      if (auth) {
        this.items = this.af.database.list(
          '/messages',
          {
            query: {
              limitToLast: 100
            }
          }
        );

        this.items.subscribe(results => this.scrollToBottom())
      } else {
        this.router.navigateByUrl('/login');
      }
    });
  }

  scrollToBottom(): void {
    setTimeout(() => {
      try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight + 100;
      } catch(err) { }
    }, 50)
  }

  addNewMessage() {
    this.items.push({
      nick: this.nick,
      message: this.message,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
    });

    this.message = '';

    this.scrollToBottom();
  }
}
