import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { FlashCardSet } from '../model/flashcardset';


@Injectable({
  providedIn: 'root'
})
export class FlashCardSetService {

  //private apiUrl = 'http://api.yourwebsite.com/flashcardset'; // replace with your actual API endpoint
  private readonly apiUrl = environment.apiUrl + '/api/flashcardSet';
  constructor(private http: HttpClient) { }

  getFlashCardSets(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getFlashCardSet(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createFlashCardSet(flashCardSet: FlashCardSet): Observable<FlashCardSet> {
    return this.http.post<any>(this.apiUrl, flashCardSet);
  }

  updateFlashCardSet(id: number, flashCardSet: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, flashCardSet);
  }

  deleteFlashCardSet(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}