import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductPlanService } from '../services/product-plan.service';
import { ProductPlan } from '../model/ProductPlan';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss'],
})
export class CheckoutComponent implements OnInit {
  selectedPlan: ProductPlan | null = null;

  constructor(
    private route: ActivatedRoute,
    private productPlanService: ProductPlanService,
    private router: Router
  ) { }

  ngOnInit(): void {

    const planId = this.route.snapshot.paramMap.get('planId') || '';
    this.selectedPlan = this.getPlanById(planId);


    console.log({ "planId": planId });
    if (planId) {
      this.productPlanService.getProductPlanById(Number(planId)).subscribe(
        (plan) => {
          this.selectedPlan = plan;
        },
        (error) => {
          this.router.navigate(['/dashboard']);
        }
      );
    } else {

      this.router.navigate(['/products']);
    }
  }


  getPlanById(planId: string) {

    // Return the plan object based on the planId from your plans array
    // Replace "yourPlansArray" with the actual variable name containing your plans
    return this.selectedPlan;
  }

}
