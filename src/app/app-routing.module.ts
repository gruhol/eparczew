import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminpageComponent } from './layouts/adminpage/adminpage.component';
import { DefaultComponent } from './layouts/default/default.component';
import { FullpageComponent } from './layouts/fullpage/fullpage.component';
import { AdminProductUpdateComponent } from './modules/admin/admin-product/admin-product-update/admin-product-update.component';
import { AdminProductsComponent } from './modules/admin/admin-product/admin-products.component';
import { AdminComponent } from './modules/admin/admin.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { ProductComponent } from './modules/product/product.component';
import { AdminProductAddComponent } from './modules/admin/admin-product/admin-product-add/admin-product-add.component';
import { ProductDetailsComponent } from './modules/product-details/product-details.component';
import { AdminCategoryComponent } from './modules/admin/admin-category/admin-category.component';
import { AdminCategoryAddComponent } from './modules/admin/admin-category/admin-category-add/admin-category-add.component';
import { AdminCategoryUpdateComponent } from './modules/admin/admin-category/admin-category-update/admin-category-update.component';
import { CategoryComponent } from './modules/category/category.component';
import { CartComponent } from './modules/cart/cart.component';

const routes: Routes = [
  {
    path:'', component: DefaultComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'product', component: ProductComponent},
      {path: 'product/:slug', component: ProductDetailsComponent},
      {path: 'categories/:slug', component: CategoryComponent},
      {path: 'cart', component: CartComponent}
    ]
  },
  {
    path:'', component: FullpageComponent, children: [
      {path: 'login', component: LoginComponent}
    ]
  },
  {
    path:'', component: AdminpageComponent, children: [
      {path: 'admin', component: AdminComponent},
      {path: 'admin/products', component: AdminProductsComponent},
      {path: 'admin/products/update/:idProduct', component: AdminProductUpdateComponent},
      {path: 'admin/products/add', component: AdminProductAddComponent},
      {path: 'admin/categories', component: AdminCategoryComponent},
      {path: 'admin/categories/add', component: AdminCategoryAddComponent},
      {path: 'admin/categories/update/:id', component: AdminCategoryUpdateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
