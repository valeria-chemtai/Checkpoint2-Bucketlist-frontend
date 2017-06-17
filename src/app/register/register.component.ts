import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/Rx';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
	username;
	email;
	password;

  constructor(private restangular: Restangular, private router: Router) { }
  registerUser(){
  	let data = { 'username': this.username, 'email': this.email, 'password': this.password}
  	let baseUrl = this.restangular.all('auth/register');
  	// console.log(baseUrl);
  	baseUrl.post(data).subscribe(resp => {
            console.log( resp);
            this.router.navigate(["/login"]);
        }, function(err) {
            console.log(err);
        });
  }

  ngOnInit() {
  	
  }

}
