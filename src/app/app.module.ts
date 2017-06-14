import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BucketlistComponent } from './bucketlist/bucketlist.component';
import { BucketlistItemsComponent } from './bucketlist-items/bucketlist-items.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    BucketlistComponent,
    BucketlistItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
