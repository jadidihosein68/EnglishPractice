import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Plan} from '../model/Plan';
import {Benefit} from '../model/benefit';
import { ProductPlanService } from '../services/product-plan.service';
import {  ProductPlan } from '../model/ProductPlan';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  plans?: ProductPlan[] ;


  benefits: Benefit[] = [
    {
      icon: 'psychology',
      title: 'Improve Learning',
      description: 'Our plans are designed to enhance your learning experience and help you grasp concepts quickly and effectively.'
    },
    {
      icon: 'analytics',
      title: 'Track Progress',
      description: 'Monitor your progress with our plans that include detailed statistics and personalized recommendations.'
    },
    {
      icon: 'headset_mic',
      title: 'Expert Support',
      description: 'Receive guidance and support from our team of experts to ensure your success throughout the learning journey.'
    }
  ];

  constructor(private router: Router , private productPlanService: ProductPlanService) { }

  ngOnInit(): void {

    this.productPlanService.getProductPlans().subscribe((plan) => {
      this.plans = plan;
    });
  }

  selectPlan(plan: any) {
    console.log({"planid":plan.id});
    this.router.navigate(['/checkout', plan.id]);
  }
}
