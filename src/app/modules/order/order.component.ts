import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { CartSummary } from '../common/model/cart/cartSummary';
import { OrderDto } from './model/orderDto';
import { OrderSummary } from './model/OrderSummary';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  
  cartSummary!: CartSummary;
  formGrup!: FormGroup;
  orderSummary!: OrderSummary;

  
  constructor(
    private cookieService: CookieService,
    private orderService: OrderService,
    private formBuilder: FormBuilder
    ) {}

  ngOnInit(): void {
    this.checkCartEmpty();
    this.formGrup = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      street: ['', Validators.required],
      zipcode: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      phone: ['', Validators.required]
    })
  }
  checkCartEmpty() {
    let cartId = Number(this.cookieService.get("cartId"));
    this.orderService.getCart(cartId)
      .subscribe(summary => this.cartSummary = summary)
  }

  submit() {
    if (this.formGrup.valid){
      this.orderService.placeOrder({
          
      } as OrderDto)
        .subscribe(orderSummary => {
          this.orderSummary = orderSummary;
          this.cookieService.delete("cartId");
        })
    }
  }

  get firstname() {
    return this.formGrup.get("firstname");
  }

  get lastname() {
    return this.formGrup.get("lastname");
  }

  get street() {
    return this.formGrup.get("street");
  }

  get zipcode() {
    return this.formGrup.get("zipcode");
  }

  get city() {
    return this.formGrup.get("city");
  }

  get email() {
    return this.formGrup.get("email");
  }

  get phone() {
    return this.formGrup.get("phone");
  }
}
