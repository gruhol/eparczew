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
  requiredFileTypes = "image/jpeg, image/png";
  imageForm!: FormGroup;
  image: string | null = null;

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
      image: [''],
      slug: ['', [Validators.required]],
      categoryId: ['', [Validators.required]]
    });

    this.imageForm = this.formBuilder.group({
      file: ['']
    })
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
      idBrand: this.productForm.get('idBrand')?.value,
      image: this.image,
      slug: this.productForm.get('slug')?.value,
      categoryId: this.productForm.get('categoryId')?.value
    } as AdminProductUpdate)
    .subscribe({
      next: product => {
      this.mapFormValues(product);
      this.snackBar.open("Zapisano", '', {duration: 3000});
      },
      error: err => this.adminMessageService.addSpringErrors(err.errors)
    });
  }

  uploadFile() {
    let formData = new FormData();
    formData.append('file', this.imageForm.get('file')?.value);
    this.service.uploadImage(formData)
      .subscribe(result => this.image = result.filename);
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      this.imageForm.patchValue({
        file: event.target.files[0]
      })
    }
  }


  private mapFormValues(product: AdminProductUpdate): void {
    this.productForm.setValue({
      productName: product.productName,
      idBrand: product.idBrand,
      image: this.image,
      slug: product.slug,
      categoryId: product.categoryId
    });
    this.image = product.image;
  }

}
