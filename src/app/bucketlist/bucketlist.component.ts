import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/Rx';
import {Ng2PaginationModule} from 'ng2-pagination';

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
  search;
  resp;
  bucketlistResp;
  showErrors = false;
  // private _editBucketlist;

  constructor(private restangular: Restangular, private router: Router) { }

  ngOnInit() { 
    this.getBucketlist()
  }

  errorTimer() {
    this.showErrors = true;
    setTimeout(() => {
      this.showErrors = false;
    }, 3000);
  }

  addBucketlist(){
    let data = { 'name': this.name};
    let baseUrl = this.restangular.all('/bucketlists/');
    
    baseUrl.post(data).subscribe(resp => {
      console.log( resp);
      this.getBucketlist();
      this.name = ''
    }, err => {
      console.log(err.data.message);
      this.bucketlistResp = err.data.message;
      this.errorTimer()
    });
  }

  getBucketlist(){
    console.log('token: ', localStorage.getItem('auth_token'))
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
    this.bucketlist = bucketlist;
    this.name = bucketlist.name;
  }

  saveBucketlist(){
    this.bucketlist.name = this.name
    this.bucketlist.put().subscribe(resp =>{
      console.log('done', resp);
    }, err => {
      console.log('error', err);
      this.bucketlistResp = err.data.message;
      this.errorTimer()
    });
    
    this.getBucketlist();
    this.name = '';
    this.edit = false; 
  }

  viewBucketlistItems(id){
    this.router.navigate(["/items", id]);
  }

  searchBucketlist(){
    this.restangular.all("bucketlists").customGET('', { q: this.search}).subscribe(resp => {
       this.bucketlists = resp;
    }, err => {
      console.log(err)
    });
  }
}
