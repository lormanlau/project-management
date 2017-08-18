import { Component } from '@angular/core';
import { ProductcrudService } from './productcrud.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	products = []
	constructor(private _productcrud: ProductcrudService){
		this.products = this._productcrud.getProducts()
	} 
}
