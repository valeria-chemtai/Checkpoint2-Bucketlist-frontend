import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { FormsModule } from '@angular/forms';
import { MaterializeModule } from 'ng2-materialize';


import { AppComponent } from './app.component';
import { BucketlistComponent } from './bucketlist/bucketlist.component';
import { BucketlistItemsComponent } from './bucketlist-items/bucketlist-items.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

export function RestangularConfigFactory (RestangularProvider) {
  RestangularProvider.setBaseUrl('http://127.0.0.1:5000/');
  RestangularProvider.setDefaultHeaders({'Authorization': localStorage.getItem('auth_token')});
  RestangularProvider.setRequestSuffix("/")
}

@NgModule({
  declarations: [
    AppComponent,
    BucketlistComponent,
    BucketlistItemsComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RestangularModule.forRoot(RestangularConfigFactory),
    HttpModule,
    MaterializeModule.forRoot(),
    FormsModule,
    RouterModule.forRoot([
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'bucketlist', component: BucketlistComponent }
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
