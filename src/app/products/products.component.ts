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


  benefits: any[] = [
    {
      icon: 'psychology',
      title: 'Improve Learning',
      description: 'Our plans are designed to enhance your learning experience and help you grasp concepts quickly and effectively.',
      imgurl:'https://th.bing.com/th/id/OIG.WTEWro0PUPSzbCIrpyXi?pid=ImgGn'
    },
    {
      icon: 'analytics',
      title: 'Track Progress',
      description: 'Monitor your progress with our plans that include detailed statistics and personalized recommendations.',
      imgurl:'https://th.bing.com/th/id/OIG.3P3X7PSQtOamspE.2NWo?pid=ImgGn'
    },
    {
      icon: 'headset_mic',
      title: 'Expert Support',
      description: 'Receive guidance and support from our team of experts to ensure your success throughout the learning journey.',
      imgurl:'https://th.bing.com/th/id/OIG.8aJLlbKNk4bgwk4jNXk2?pid=ImgGn'
    }
  ];



  testimonials = [
    {
      name: "John Doe",
      message: "This service is amazing. I've learned so much since I've started using it. I highly recommend it!",
      role: "Student"
    },
    {
      name: "Jane Smith",
      message: "I love the user-friendly interface and the wide array of flashcards available. This platform makes learning fun!",
      role: "Teacher"
    },
    {
      name: "Alice Johnson",
      message: "I appreciate the ability to customize my learning experience. The progress tracking is also very helpful.",
      role: "Parent"
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
