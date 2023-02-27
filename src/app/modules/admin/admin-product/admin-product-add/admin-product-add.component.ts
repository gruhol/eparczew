import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminMessageService } from '../../common/service/admin-message.service';
import { AdminProductAddService } from './admin-product-add.service';

@Component({
  selector: 'app-admin-product-add',
  templateUrl: './admin-product-add.component.html',
  styleUrls: ['./admin-product-add.component.scss']
})
export class AdminProductAddComponent implements OnInit {
  
  productForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: AdminProductAddService,
    private router: Router,
    private snackBar: MatSnackBar,
    private adminMessageService: AdminMessageService
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', [Validators.required, Validators.minLength(3)]],
      idBrand: ['', [Validators.required]],
      slug: ['', [Validators.required]],
      categoryId: ['', [Validators.required]]
    });
  }

  submit() {
    this.service.saveNewProduct(this.productForm.value)
      .subscribe({
        next: product => {
          this.router.navigate(["/admin/products/update", product.idProduct])
            .then(() => this.snackBar.open("Product dostał dodany", "", {duration: 3000}))
        },
        error: err => this.adminMessageService.addSpringErrors(err.error)
      })
  }

}
