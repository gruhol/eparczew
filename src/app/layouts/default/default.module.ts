import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { ProductComponent } from 'src/app/modules/product/product.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductDetailsComponent } from 'src/app/modules/product-details/product-details.component';
import { CategoryComponent } from 'src/app/modules/category/category.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from 'src/app/modules/cart/cart.component';
import { OrderComponent } from 'src/app/modules/order/order.component';
import { ReplacePipe } from 'src/app/modules/common/pipe/preplacePipe';
import { ProfileComponent } from 'src/app/modules/profile/profile.component';

@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailsComponent,
    CategoryComponent,
    CartComponent,
    OrderComponent,
    ReplacePipe,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class DefaultModule { }
