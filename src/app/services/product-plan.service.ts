import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductPlan } from '../model/ProductPlan';
import { environment } from '../../environments/environments';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductPlanService {
  private readonly apiUrl = environment.apiUrl + '/product-plans.json';
  private readonly apiUrlByID = environment.apiUrl + '/product-plan.json';

  constructor(private http: HttpClient) {}

  getProductPlans(): Observable<ProductPlan[]> {
    return this.http.get<{ ProductPlan: ProductPlan[] }>(this.apiUrl).pipe(
      map((response) => response.ProductPlan)
    );
  }


  getProductPlanById(id: number): Observable<ProductPlan> {
    //return this.http.get<{ ProductPlan: ProductPlan }>(`${this.apiUrl}/${id}`).pipe(
      return this.http.get<{ ProductPlan: ProductPlan }>(`${this.apiUrlByID}`).pipe(
      map((response) => response.ProductPlan)
    );
  }

}