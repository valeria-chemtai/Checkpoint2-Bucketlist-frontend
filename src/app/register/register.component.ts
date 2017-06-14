import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-auth',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	username;
	email;
	password;

  constructor(private restangular: Restangular) { }
  registerUser(){
  	console.log(this.username)
  	let data = { 'username': this.username, 'email': this.email, 'password': this.password}
  	let baseUrl = this.restangular.all('auth/register');
  	// console.log(baseUrl);
  	baseUrl.post(data).subscribe(resp => {
            console.log( resp);
        }, function(err) {
            console.log(err);
        });

  }

  ngOnInit() {
  	
  }

}
