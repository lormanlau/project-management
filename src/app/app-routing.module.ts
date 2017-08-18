import { NgModule } from '@angular/core';
import { LandingComponent } from './landing/landing.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { NewProductComponent } from './new-product/new-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent },
  { path: 'products', pathMatch: 'full', component: ProductsListComponent },
  { path: 'products/new', pathMatch: 'full', component: NewProductComponent },
  { path: 'products/edit/:index', component: EditProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
