import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  username: string;
  password: string;
  ngOnInit() {
  }

  onsubmit() {
    console.log(`Hi ${this.username} your password is ${this.password}` );
  }

}
