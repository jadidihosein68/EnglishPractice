import { TestBed } from '@angular/core/testing';

import { ProductPlanService } from './product-plan.service';

describe('ProductPlanService', () => {
  let service: ProductPlanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductPlanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
