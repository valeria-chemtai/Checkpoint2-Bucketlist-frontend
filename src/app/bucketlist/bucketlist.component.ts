import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/Rx';

@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css'],
  moduleId: module.id,
})
export class BucketlistComponent implements OnInit {
  name;
  bucketlists;
  bucketlist;
  edit: boolean = false;
  private _editBucketlist;

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
            this.getBucketlist();
            this.name = ''
        }, function(err) {
            console.log(err);
        });
  }

getBucketlist(){
    let baseUrl = this.restangular.all('/bucketlists/');
    baseUrl.getList().subscribe(resp => {
            this.bucketlists = resp;
        }, function(err) {
            console.log(err);
        });
  }

deleteBucketlist(id){
  let baseUrl = this.restangular.one('/bucketlists/', id);
  baseUrl.remove().subscribe(resp =>{
    console.log( resp);
    this.getBucketlist();
    this.name = ''
        }, function(err) {
            console.log(err);
  });
}

editBucketlist(bucketlist): void{
  this.edit = true;
  this._editBucketlist = bucketlist;
  this.name = bucketlist.name;
}
saveBucketlist(editBucketlist){
  editBucketlist.put().subscribe(resp =>{
    console.log( resp);
    this.getBucketlist();
    this.name = '' 
        }, function(err) {
            console.log(err);
  });
}
saveBucketlistName(){
  this._editBucketlist.name = this.name;
  this.saveBucketlist(this._editBucketlist);
  this.edit =false;
  this._editBucketlist = null;
  this.name = ''
}
}
