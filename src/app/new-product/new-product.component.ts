import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductcrudService } from './../productcrud.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
	product = {
		title: "",
		price: "",
		url: ""
	}
  constructor(private _prouductcrud: ProductcrudService) { }

  ngOnInit() {
  }

  submitNewItem(formData){
  	this._prouductcrud.create(this.product);
  	this.product = {
		title: "",
		price: "",
		url: ""
	};
  }
}
