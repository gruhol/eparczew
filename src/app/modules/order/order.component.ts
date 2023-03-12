import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { CartSummary } from '../common/model/cart/cartSummary';
import { OrderDto } from './model/orderDto';
import { OrderService } from './order.service';
import { OrderSummary } from './model/orderSummary';
import { InitData } from './model/initData';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  
  cartSummary!: CartSummary;
  formGrup!: FormGroup;
  orderSummary!: OrderSummary;
  cartId!: Number;
  initData!: InitData;

  private statuses = new Map<string, string>([
    ["NEW","Nowe"]
  ]);
  
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
      email: ['', Validators.required],
      phone: ['', Validators.required],
      shipment: ['', Validators.required]
    })
    this.getinitData();
  }

  checkCartEmpty() {
    this.cartId = Number(this.cookieService.get("cartId"));
    let cartId = Number(this.cookieService.get("cartId"));
    this.orderService.getCart(cartId)
      .subscribe(summary => this.cartSummary = summary)
  }

  submit() {
    if (this.formGrup.valid){
      this.orderService.placeOrder({
        firstname: this.formGrup.get('firstname')?.value,
        lastname: this.formGrup.get('lastname')?.value,
        street: this.formGrup.get('street')?.value,
        zipcode: this.formGrup.get('zipcode')?.value,
        city: this.formGrup.get('city')?.value,
        email: this.formGrup.get('email')?.value,
        phone: this.formGrup.get('phone')?.value,
        cartId: Number(this.cookieService.get("cartId")),
        shipmentId: Number(this.formGrup.get('shipment')?.value.id)
      } as OrderDto)
        .subscribe(orderSummary => {
          this.orderSummary = orderSummary;
          this.cookieService.delete("cartId");
      });
    }
  }

  getinitData() {
    this.orderService.getInitData()
      .subscribe(initData => {
        this.initData = initData;
        this.setDefultShipment();
      })
  }

  setDefultShipment() {
    this.formGrup.patchValue({"shipment": this.initData.shipment
      .filter(shipment => shipment.defaultShipment === true)[0]
    })
  }

  getStatus(status: string) {
    return this.statuses.get(status);
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

  get shipment() {
    return this.formGrup.get("shipment");
  }
}
