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

  /**
   * Constructor of the class.
   *
   * @param {LocalStorageService} localStorage
   * @param {Router}              router
   */
  public constructor(
    private localStorage: LocalStorageService,
    private router: Router
  ) { }

  /**
   * ngOnInit lifecycle hook.
   */
  public ngOnInit() {
    this.nickControl.focus();
  }

  /**
   * Method to store nick to local storage and redirect user.
   *
   * @param {string} nick
   */
  public enterNick(nick: string) {
    this.localStorage.store('nick', nick);

    this.router.navigateByUrl('/chat');
  }
}
