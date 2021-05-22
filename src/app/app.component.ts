import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Spinkit } from 'ng-http-loader';
import { CustomLoaderComponent } from './custom-loader/custom-loader.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'covid-app';
  opened:any;
  public spinkit = Spinkit;

  public customLoader = CustomLoaderComponent;
  load(){
    this.spinkit.skRotatingPlane
  }
  constructor( public router: Router) { }

  sizeChange() {
    this.opened = !this.opened;
    this.router.navigated = false;
  }
}
