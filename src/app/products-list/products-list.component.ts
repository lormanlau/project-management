import { Component, OnInit } from '@angular/core';
import { ProductcrudService } from './../productcrud.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
	products = [];
  constructor(private _productCrud: ProductcrudService) {
  	this.products = this._productCrud.getProducts();
  }

  ngOnInit() {
  }
  deleteItem(i){
  	this._productCrud.delete(i);
  }

}
