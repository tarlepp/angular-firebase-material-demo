import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MdInput } from '@angular/material';
import { LocalStorageService } from 'ng2-webstorage';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})

export class EntryComponent implements OnInit {
  @ViewChild('nickControl') nickControl: MdInput;

  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.nickControl.focus();
  }

  enterNick(nick: string) {
    this.localStorage.store('nick', nick);

    this.router.navigateByUrl('/chat');
  }
}
