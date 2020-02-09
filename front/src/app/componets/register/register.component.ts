import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import * as myGlobals from '../globals';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  registered = false;
  submitted = false;
  userForm: FormGroup;
  guid: string;
  serviceErrors: any = {};

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(75)]],
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
      this.http.post(myGlobals.url + 'user/register', data).subscribe((data: any) => {
        alert("Registered !")
        localStorage.setItem('email', email);

        console.log(localStorage.getItem('email'));
        
        let path = '/arduinoView';
        this.router.navigate([path]);

      }, error => {
        alert("Error in the register.");
        this.serviceErrors = error.error.error;
      });
      this.registered = true;
    }
  }

  invalidName() {
    return (this.submitted && (this.serviceErrors.name != null || this.userForm.controls.name.errors != null));
  }
  invalidEmail() {
    return (this.submitted && (this.serviceErrors.email != null || this.userForm.controls.email.errors != null));
  }
  invalidPassword() {
    return (this.submitted && (this.serviceErrors.password != null || this.userForm.controls.psw.errors != null));
  }

}
