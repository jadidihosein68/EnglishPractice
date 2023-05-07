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
export class VocabularyService {

  constructor(private http: HttpClient) { }

  getVocabulary(): Observable<Vocabulary[]> {
    return this.http.get<VocabularyResponse>(environment.apiUrl+"/vocabulary.json")
      .pipe(
        map(response => {
          const vocabularyArray = response.vocabulary;
          return vocabularyArray.map((item: { Term: string; meaning: string; Pronounce: string;SampleSentences: string[]; }) => new Vocabulary(item.Term, item.meaning, item.Pronounce,item.SampleSentences));
        })
      );
  }

}