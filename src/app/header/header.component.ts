import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	private loggedIn = false;
	constructor(private router: Router) { }

	isLoggedIn() {
		return this.loggedIn;
	}

	logoutUser() {
    	localStorage.removeItem('auth_token');
    	this.loggedIn = false;
    	this.router.navigate(["/"]);
  	}

	ngOnInit() {
		this.loggedIn = !!localStorage.getItem('auth_token');
	}


}
