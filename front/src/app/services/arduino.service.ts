import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { promise } from 'protractor';
import { arduino } from '../models/arduino.model';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class arduinoService {
  readonly URL = 'http://localhost:3000/api/arduino';
  constructor(public http: HttpClient) { }  //Métodos para consumir

  public async getArduino(): Promise<arduino[]>{
    return new Promise<arduino[]>((resolve, reject) =>{
      this.http.get<arduino[]>(this.URL).subscribe(resolve, reject);
    });
  }


}
