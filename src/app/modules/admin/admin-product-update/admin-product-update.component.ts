import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { AdminMessageService } from '../admin-message.service';
import { AdminProductUpdateService } from './admin-product-update.service';
import { AdminProductUpdate } from './adminProductUpdate';

@Component({
  selector: 'app-admin-product-update',
  templateUrl: './admin-product-update.component.html',
  styleUrls: ['./admin-product-update.component.scss']
})
export class AdminProductUpdateComponent implements OnInit {
  
  product!: AdminProductUpdate;
  productForm!: FormGroup;

  constructor(
    private router: ActivatedRoute,
    private service: AdminProductUpdateService,
    private formBuilder: FormBuilder,
    private snackBar: MatSnackBar,
    private adminMessageService: AdminMessageService

  ) {}

  ngOnInit(): void {
    this.getProduct();
    this.productForm = this.formBuilder.group({
      productName: ['', [Validators.required, Validators.minLength(3)]],
      idBrand: ['', [Validators.required]],
    });
  }

  getProduct() {
    let id = Number(this.router.snapshot.params['idProduct']);
    this.service.getProduct(id)
      .subscribe(product => this.mapFormValues(product)
      );
  }

  submit() {
    let id = Number(this.router.snapshot.params['idProduct']);
    this.service.saveProduct(id, {
      productName: this.productForm.get('productName')?.value,
      idBrand: this.productForm.get('idBrand')?.value
    } as AdminProductUpdate)
    .subscribe({
      next: product => {
      this.mapFormValues(product);
      this.snackBar.open("Zapisano", '', {duration: 3000});
      },
      error: err => this.adminMessageService.addSpringErrors(err.errors)
    });
  }

  private mapFormValues(product: AdminProductUpdate): void {
    return this.productForm.setValue({
      productName: product.productName,
      idBrand: product.idBrand
    });
  }

}
