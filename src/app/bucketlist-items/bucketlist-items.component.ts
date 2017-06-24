import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RestangularModule, Restangular } from 'ngx-restangular';
import 'rxjs/Rx';

@Component({
  selector: 'app-bucketlist-items',
  templateUrl: './bucketlist-items.component.html',
  styleUrls: ['./bucketlist-items.component.css']
})
export class BucketlistItemsComponent implements OnInit {
	name;
	items;
	item;
	edit: boolean = false;
	bucketlist_id;
	bucketlist_name;

  constructor(private restangular: Restangular, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route
        .params
        .subscribe(params => {
            this.bucketlist_id = params['id'];
            console.log(this.bucketlist_id);
        });
  	this.getItems(this.bucketlist_id)
  	let get_bucketlist = this.restangular.one('bucketlists', this.bucketlist_id).get()
  	get_bucketlist.subscribe(resp => {
  		this.bucketlist_name = resp.name;
  		console.log(resp.name);
  	})
  }
  addItem(){
    let data = { 'name': this.name};
    let baseUrl = this.restangular.one('bucketlists', this.bucketlist_id).all('items');
    console.log(baseUrl);
    
    baseUrl.post(data).subscribe(resp => {
      console.log( resp);
      this.getItems(this.bucketlist_id);
      this.name = ''
    }, function(err) {
      console.log(err);
    });
  }

  getItems(bucketlist_id){
    let baseUrl = this.restangular.one('/bucketlists/', bucketlist_id).get();

    baseUrl.subscribe(resp => {
		this.items = resp.items;
    }, function(err) {
      console.log(err);
    });
  }

  deleteItem(id){
    console.log(this.bucketlist_id);
    console.log(id);
    let baseUrl = this.restangular.one('bucketlists', this.bucketlist_id).one('items', id);
    // console.log(baseUrl);
    // debugger;
    baseUrl.remove().subscribe(resp =>{
      console.log( resp);
      this.getItems(this.bucketlist_id);
      this.name = ''
    }, function(err) {
      console.log(err);
    });
  }

  editItem(item): void{
    this.edit = true;
    this.item = this.restangular.one('bucketlists', this.bucketlist_id).one('items', item.id);
    this.name = item.name;
  }
  saveItem(){
    this.item.name = this.name;
    this.item.put().subscribe(resp =>{
      console.log( resp);
      this.getItems(this.bucketlist_id);
      this.name = '';
      this.edit = false; 
    }, function(err) {
      console.log(err);
    });
  }

}
