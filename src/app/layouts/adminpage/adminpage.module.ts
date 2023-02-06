import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { AdminpageComponent } from './adminpage.component';
import { AdminProductsComponent } from 'src/app/modules/admin/admin-products/admin-products.component';
import { AdminProductUpdateComponent } from 'src/app/modules/admin/admin-product-update/admin-product-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminProductAddComponent } from 'src/app/modules/admin/admin-product-add/admin-product-add.component';
import { AdminProductFormComponent } from 'src/app/modules/admin/admin-product-form/admin-product-form.component';
import { AdminMessageComponent } from 'src/app/modules/admin/admin-message/admin-message.component';
import { AdminConfirmDialogComponent } from 'src/app/modules/admin/admin-confirm-dialog/admin-confirm-dialog.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminpageComponent,
    AdminProductsComponent,
    AdminProductUpdateComponent,
    AdminProductAddComponent,
    AdminProductFormComponent,
    AdminMessageComponent,
    AdminConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class AdminpageModule { }
