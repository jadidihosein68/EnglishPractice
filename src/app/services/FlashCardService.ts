import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { FlashCard } from '../model/flashcard';

@Injectable({
  providedIn: 'root'
})
export class FlashCardService {

  private readonly apiUrl = environment.apiUrl + '/api/flashcard';

  constructor(private http: HttpClient) { }


  getFlashCard(id: string): Observable<FlashCard> {
    return this.http.get<FlashCard>(`${this.apiUrl}/${id}`);
  }

  createFlashCard(FlashCardSetid: string, flashCard: any): Observable<any> {
    return this.http.post<FlashCard>( this.apiUrl+"/flashcardset/"+FlashCardSetid, flashCard);
  }


  updateFlashCard(id: string, flashCard: FlashCard): Observable<FlashCard> {
    return this.http.put<FlashCard>(`${this.apiUrl}/${id}`, flashCard);
  }

  deleteFlashCard(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
