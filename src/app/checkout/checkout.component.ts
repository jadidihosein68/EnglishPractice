import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  selectedPlan: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {




    this.selectedPlan = {
      name: 'Premium Plan',
      price: 49.99,
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    };

    const planId = this.route.snapshot.paramMap.get('planId') || '';
    this.selectedPlan = this.getPlanById(planId);

    

  }


  getPlanById(planId: string) {

    // Return the plan object based on the planId from your plans array
    // Replace "yourPlansArray" with the actual variable name containing your plans
    return this.selectedPlan;
  }

}
