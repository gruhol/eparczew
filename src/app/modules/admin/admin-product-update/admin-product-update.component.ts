import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
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
    private snackBar: MatSnackBar
    ) {}

  ngOnInit(): void {
    this.getProduct();
    this.productForm = this.formBuilder.group({
      productName: [''],
      idBrand: [''],
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
    .subscribe(product => {
      this.mapFormValues(product);
      this.snackBar.open("Zapisano", '', {duration: 3000});
    });
  }

  private mapFormValues(product: AdminProductUpdate): void {
    return this.productForm.setValue({
      productName: product.productName,
      idBrand: product.idBrand
    });
  }

}
