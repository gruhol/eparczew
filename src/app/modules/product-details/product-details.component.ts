import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductDetails } from './model/productDetails';
import { Review } from './model/review';
import { ProductDetailsService } from './product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product!: ProductDetails;
  reviewForm!: FormGroup;

  constructor(
    private service: ProductDetailsService,
    private router: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {

  }
  ngOnInit(): void {
    this.getProductDetails();
    this.reviewForm = this.formBuilder.group({
      authorName: ["", Validators.required, Validators.minLength(2)],
      content: ["", Validators.required, Validators.minLength(2)],
    })
  }


  getProductDetails() {
    let slug = this.router.snapshot.params['slug'];
    this.service.getProductDetails(slug)
      .subscribe(product => this.product = product);
  }

  submit() {
    if(this.reviewForm.valid) {
      this.service.saveProductReview({
        authorName: this.reviewForm.get("authorName")?.value,
        content: this.reviewForm.get("content")?.value,
        productId: this.product.id,
      } as Review).subscribe();
    }
  }

  get authorName() {
    return this.reviewForm.get('authorName');
  }

  get content() {
    return this.reviewForm.get('content');
  }

}
