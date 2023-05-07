import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Plan} from '../model/Plan';
import {Benefit} from '../model/benefit';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  plans: Plan[] = [
    {
      id:"1",
      title: 'Free Plan',
      price: 'Free',
      features: [
        'Access to flashcards',
        'Basic pronunciation',
        'Writing Mock Exam'
      ]
    },
    {
      id:"2",
      title: 'Basic Plan',
      price: '$9.99/mo',
      features: [
        'All Free Plan features',
        'Upload custom flashcards',
        'AI pronunciation for PTE and IELTS',
        'Advance Mock Exam'
      ]
    },
    {
      id:"3",
      title: 'Advanced Plan',
      price: '$19.99/mo',
      features: [
        'All Basic Plan features',
        'Unlimited custom flashcards',
        'Track Progress'
      ]
    }
  ];


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

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectPlan(plan: any) {
    console.log({"planid":plan.id});
    this.router.navigate(['/checkout', plan.id]);
  }
}
