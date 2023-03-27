import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullpageComponent } from './fullpage.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from 'src/app/modules/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FullpageComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class FullpageModule { }
