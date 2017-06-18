import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Bucket List Manager';

  private loggedIn = false;
  constructor(private http: Http) {
    this.loggedIn = !!localStorage.getItem('auth_token');
  }
  
  isLoggedIn() {
    return this.loggedIn;
  }

}
