import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ud-data-card',
  templateUrl: './data-card.component.html',
  styleUrls: ['./data-card.component.css']
})
export class DataCardComponent implements OnInit {

  @Input() data:any;
  constructor() { }

  ngOnInit(): void {

  }

}
