import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { OrderListDto } from './model/orderListDto';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  orders!: Array<OrderListDto>;
  displayedColumns = ["id", "placeDate", "orderStatus", "grossValue"];

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.profileService.getOrders()
      .subscribe(orders => this.orders = orders)
  }

}
