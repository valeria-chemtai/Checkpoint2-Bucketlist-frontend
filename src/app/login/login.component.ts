import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	username;
	password;
	auth_token;
	public loggedIn = false;


  constructor(private restangular: Restangular) { }
  loginUser(){
  	let data = { 'username': this.username, 'password': this.password}
  	let baseUrl = this.restangular.all('auth/login');
  	baseUrl.post(data).subscribe(resp => {
            console.log(resp);
            if (resp.success) {
          		localStorage.setItem('auth_token', resp.auth_token);
          		this.loggedIn = true;
        }
        }, function(err) {
            console.log(err);
        });
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }


  ngOnInit() {
  }

}
