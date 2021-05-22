import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private httpHeader = {
    headers: new HttpHeaders({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET"
    })
  };
  constructor(private _httpClient:HttpClient) { }

  getAllData()  {
    return this._httpClient.get('/api/data.json',this.httpHeader);
  }

}
