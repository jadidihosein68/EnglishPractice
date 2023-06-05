import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { FlashCard } from '../model/flashcard';

@Injectable({
  providedIn: 'root'
})
export class StudyService {
  private readonly apiUrl = environment.apiUrl + '/api/study';
  constructor(private http: HttpClient) { }
  getFlashCardbyID(id: string): Observable<any> {
    return this.http.get<FlashCard>(`${this.apiUrl}/${id}`);
  }
}
