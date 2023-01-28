import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { AdminpageComponent } from './adminpage.component';



@NgModule({
  declarations: [
    AdminComponent,
    AdminpageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    SharedModule
  ]
})
export class AdminpageModule { }
