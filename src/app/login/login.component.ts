import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/Rx';


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


  constructor(private restangular: Restangular, private router: Router) { }
  loginUser(){
  	let data = { 'username': this.username, 'password': this.password}
  	let baseUrl = this.restangular.all('auth/login');
  	baseUrl.post(data).subscribe(resp => {
            console.log(resp);
          		localStorage.setItem('auth_token', resp.access_token);
          		this.loggedIn = true;
              window.location.reload();
              this.router.navigate(["/bucketlist"]);
        
        }, function(err) {
            console.log(err);
        });
  }

  logoutUser() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }


  ngOnInit() {
  }

}
