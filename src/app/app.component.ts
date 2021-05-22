import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid-app';
  opened:any;
  constructor( public router: Router) { }

  sizeChange() {
    this.opened = !this.opened;
    this.router.navigated = false;
  }
}
