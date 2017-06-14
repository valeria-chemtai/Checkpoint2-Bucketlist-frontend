import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <div>
  	<div style="text-align:center">
  		<h1>
    		YOLO {{title}}!!
  		</h1>
  		<img width="300" src="./app.yolo.jpg">
	</div>
	<h2>Lets get started: </h2>
	<ul>
  		<li>
    		<h2><a routerLink="register">Register</a></h2>
  		</li>
  		<li>
    		<h2><a routerLink="login">Login</a></h2>
  		</li>
  		<li>
    		<h2><a routerLink="about">About Us</a></h2>
  		</li>
	</ul>
	<div class='container'>
        <router-outlet></router-outlet>
    </div>
  </div>`
})
export class AppComponent {
  title = 'Bucket List Manager';
}
