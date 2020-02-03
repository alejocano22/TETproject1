import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //public userArray: User[] = [];

  public userControl = new FormControl('');
  public passwordControl = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

  public getControl(){
    console.log(this.userControl.value);
    console.log(this.passwordControl.value);
  }

 /* public postData(){
    this.userArray = await this.userService.postUser({
      user: this.userControl.value,
      password: this.passwordControl.value
    });
  }*/

}
