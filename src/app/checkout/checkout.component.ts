import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  selectedPlan: any;

  constructor() {}

  ngOnInit(): void {
    this.selectedPlan = {
      name: 'Premium Plan',
      price: 49.99,
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    };
  }
}
