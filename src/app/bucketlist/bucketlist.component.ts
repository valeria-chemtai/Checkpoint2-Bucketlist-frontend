import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/Rx';

@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css']
})
export class BucketlistComponent implements OnInit {
  name;
  bucketlists;

  constructor(private restangular: Restangular, private router: Router) { }

  ngOnInit() { 
    this.getBucketlist()
  }
addBucketlist(){
    let data = { 'name': this.name};
    let baseUrl = this.restangular.all('/bucketlists/');
    // console.log(baseUrl);
    baseUrl.post(data).subscribe(resp => {
            console.log( resp);
        }, function(err) {
            console.log(err);
        });
  }

getBucketlist(){
    let baseUrl = this.restangular.all('/bucketlists/');
    let list = baseUrl.getList().subscribe(resp => {
            this.bucketlists = resp;
        }, function(err) {
            console.log(err);
        });
  }

removeBucketlist(bucketlist){
  let baseUrl = this.restangular.all('/bucketlists/<int:id>/');
  baseUrl.delete(bucketlist).subscribe(resp =>{
    console.log( resp);
        }, function(err) {
            console.log(err);
  });
}
}
