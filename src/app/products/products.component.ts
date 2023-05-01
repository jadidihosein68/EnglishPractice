import { Component, OnInit } from '@angular/core';

interface Plan {
  title: string;
  price: string;
  features: string[];
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  plans: Plan[] = [
    {
      title: 'Free Plan',
      price: 'Free',
      features: [
        'Access to flashcards',
        'Basic pronunciation'
      ]
    },
    {
      title: 'Basic Plan',
      price: '$9.99/mo',
      features: [
        'All Free Plan features',
        'Upload custom flashcards',
        'AI pronunciation for PTE and IELTS'
      ]
    },
    {
      title: 'Advanced Plan',
      price: '$19.99/mo',
      features: [
        'All Basic Plan features',
        'Unlimited custom flashcards',
        'Priority customer support'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
