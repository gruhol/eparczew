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
import { OrderComponent } from './modules/order/order.component';
import { AdminLoginComponent } from './modules/admin/admin-login/admin-login.component';
import { AdminpageEmptyComponent } from './layouts/adminpageempty/adminpageempty.component';
import { AdminAuthorizeGuard } from './modules/admin/common/guard/adminAuthorizeGuard';
import { ProfileComponent } from './modules/profile/profile.component';

const routes: Routes = [
  {
    path:'', component: DefaultComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'product', component: ProductComponent},
      {path: 'product/:slug', component: ProductDetailsComponent},
      {path: 'categories/:slug', component: CategoryComponent},
      {path: 'cart', component: CartComponent},
      {path: 'order', component: OrderComponent},
      {path: 'profile', component: ProfileComponent}
    ]
  },
  {
    path:'', component: FullpageComponent, children: [
      {path: 'login', component: LoginComponent}
    ]
  },
  {
    path:'', component: AdminpageComponent, children: [
      {path: 'admin', component: AdminComponent, canActivate: [AdminAuthorizeGuard]},
      {path: 'admin/products', component: AdminProductsComponent, canActivate: [AdminAuthorizeGuard]},
      {path: 'admin/products/update/:idProduct', component: AdminProductUpdateComponent, canActivate: [AdminAuthorizeGuard]},
      {path: 'admin/products/add', component: AdminProductAddComponent, canActivate: [AdminAuthorizeGuard]},
      {path: 'admin/categories', component: AdminCategoryComponent, canActivate: [AdminAuthorizeGuard]},
      {path: 'admin/categories/add', component: AdminCategoryAddComponent, canActivate: [AdminAuthorizeGuard]},
      {path: 'admin/categories/update/:id', component: AdminCategoryUpdateComponent, canActivate: [AdminAuthorizeGuard]}
    ]
  },
  {
    path:'', component: AdminpageEmptyComponent, children: [
      {path: 'admin/login', component: AdminLoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
