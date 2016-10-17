import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ng2-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})

export class EntryComponent implements OnInit {
  constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit() { }

  enterNick(nick: string) {
    this.localStorage.store('nick', nick);

    this.router.navigateByUrl('/chat');
  }
}
