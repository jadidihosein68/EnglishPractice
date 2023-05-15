import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vocabulary } from '../model/vocabulary.model';
import { VocabularyResponse } from '../model/vocabulary-response.model';
import { environment } from '../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class FlashCardService {

  constructor(private http: HttpClient) { }

  getVocabulary(): Observable<Vocabulary[]> {
    return this.http.get<VocabularyResponse>(environment.apiUrl+"/api/getvocabulary")
      .pipe(
        map(response => {
          const vocabularyArray = response.vocabulary;
          return vocabularyArray.map((item: { Term: string; meaning: string; Pronounce: string;SampleSentences: string[]; }) => new Vocabulary(item.Term, item.meaning, item.Pronounce,item.SampleSentences));
        })
      );
  }

  addFlashcard(flashcard: Vocabulary): Observable<Vocabulary> {
    return this.http.post<Vocabulary>(`${environment.apiUrl+"/api/postvocabulary"}`, flashcard);
  }

  updateFlashcard(id: string, flashcard: Vocabulary): Observable<Vocabulary> {
    return this.http.put<Vocabulary>(`${environment.apiUrl+"/api/putvocabulary"}/${id}`, flashcard);
  }

  deleteFlashcard(id: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl+"/api/deletevocabulary"}/${id}`);
  }

  getFlashcardsBySetName(setName: string): Observable<Vocabulary[]> {
    return this.http.get<Vocabulary[]>(`${environment.apiUrl+"/api/getvocabulary"}/set/${setName}`);
  }


}