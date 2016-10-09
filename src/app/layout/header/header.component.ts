import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  constructor(
    public af: AngularFire,
    public router: Router
  ) { }

  ngOnInit() {}

  logout() {
    this.af.auth.logout();

    this.router.navigateByUrl('/about');
  }
}
