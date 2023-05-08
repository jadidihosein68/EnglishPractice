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
  private readonly apiUrl = environment.apiUrl + '/api/productplan';
  constructor(private http: HttpClient) {}

  getProductPlans(): Observable<ProductPlan[]> {
    return this.http.get<ProductPlan[] >(this.apiUrl);
  }


  getProductPlanById(id: number): Observable<ProductPlan> {
    return this.http.get<ProductPlan>(`${this.apiUrl}/${id}`);
  }

}
