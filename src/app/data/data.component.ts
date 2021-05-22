import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'ud-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})


export class DataComponent implements OnInit {

  data:any;
  constructor(private _dataService:DataService) {
    this._dataService.getAllData().subscribe((res:any)=>{
      this.data = res["statewise"];
      console.log(this.data);
    })
   }

  ngOnInit(): void {

  }

}
