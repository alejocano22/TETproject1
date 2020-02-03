import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { promise } from 'protractor';
import { Data } from '../models/data.model';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly URL = 'http://localhost:3000/api/data';
  constructor(public http: HttpClient) { }  //Métodos para consumir

  public async getData(): Promise<Data[]>{
    return new Promise<Data[]>((resolve, reject) =>{
      this.http.get<Data[]>(this.URL).subscribe(resolve, reject);
    });
  }


}
