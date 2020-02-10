import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import * as myGlobals from '../globals';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  registered = false;
  submitted = false;
  userForm: FormGroup;
  serviceErrors: any = {};

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.maxLength(50)]],
      psw: ['', [Validators.required, Validators.maxLength(50), Validators.minLength(3)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid == true) {
      return;
    }
    else {
      let data: any = Object.assign(this.userForm.value);
      let email = data['email'];
      this.http.post(myGlobals.url + 'user/login', data).subscribe((info: any) => {
        localStorage.setItem('email', email);
        let token = info.data['token'];
        localStorage.setItem('token', token);
        let path = '/arduinoView';
        this.router.navigate([path]);
      }, error => {
        alert("Incorrect user or password !");
        this.serviceErrors = error.error.error;
      });
      this.registered = true;
    }
  }

  invalidEmail() {
    return (this.submitted && (this.serviceErrors.email != null || this.userForm.controls.email.errors != null));
  }

  invalidPassword() {
    return (this.submitted && (this.serviceErrors.psw != null || this.userForm.controls.psw.errors != null));
  }


}
