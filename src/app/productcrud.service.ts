import { Injectable } from '@angular/core';

@Injectable()
export class ProductcrudService {
	products = [{title: 'Hello', price:'199', url: 'dasbcs'}];
  constructor() { }
  create(data){
  	this.products.push(data);
  }
  getProducts(){
  	return this.products;
  }
  getSingle(index: number){
  	return [this.products[index]];
  }
  delete(i){
  	this.products.splice(i,1);
  	return this.products;
  }
  update(product, index){
    this.products[index] = product;
  }
}
