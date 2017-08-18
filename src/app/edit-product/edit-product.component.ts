import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductcrudService } from './../productcrud.service';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
	products;
	index;
  constructor(private _route: ActivatedRoute, private _productCrud: ProductcrudService) {
  	this._route.paramMap
  		.switchMap(params => {
  			this.index = +params.get('index')
  			// console.log('im in')
  			// this.id = params.get('index');
  			// this.products = this._productCrud.getProducts()[params.get('index')];
  			return this._productCrud.getSingle(parseInt(params.get('index')));
  		})
  		.subscribe(data => { return this.products = data});
  }

  ngOnInit() {
  }
  edit(){
  	this._productCrud.update(this.products, this.index);
  }
  delete(){
    this._productCrud.delete(this.index);
  }
}
