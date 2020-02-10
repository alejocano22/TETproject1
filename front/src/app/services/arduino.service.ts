import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { arduino } from '../models/arduino.model';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from "@angular/router";
import * as myGlobals from '../componets/globals';

@Injectable({
  providedIn: 'root'
})
export class arduinoService {

  serviceErrors: any = {};
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }  //Métodos para consumir

  public getArduino(){
    this.userForm = this.formBuilder.group({
      email: localStorage.getItem('email')
    });

    let data: any = Object.assign(this.userForm.value);
    
    console.log(data);
    let myHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'token': localStorage.getItem('token')
    });
    console.log("Headers "+myHeaders); 
    return this.http.get<arduino[]>(myGlobals.url + 'arduino/get?email=' + localStorage.getItem('email'), { headers: myHeaders });
  }
}
