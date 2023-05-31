import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { FlashCardSet } from '../model/flashcardset';
import { makeHeader } from '../utility/commonFunction';
import { LocalStorageService } from './localstorage.service';


@Injectable({
  providedIn: 'root'
})
export class FlashCardSetService {

  //private apiUrl = 'http://api.yourwebsite.com/flashcardset'; // replace with your actual API endpoint
  private readonly apiUrl = environment.apiUrl + '/api/flashcardSet';
  constructor(private http: HttpClient , private myLocalStorage : LocalStorageService) { }

  getWorkShopFlashCardSets(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/workshop`,makeHeader(this.myLocalStorage.getItem('token')));
  }

  getFlashCardSet(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }


  getListOfPublishedFlashCardSet(): Observable<any> {
    return this.http.get<any>(this.apiUrl+"/publishedlist");
  }




  subscribeToFlashCard(courseID: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/subscribe/${courseID}`, null ,makeHeader(this.myLocalStorage.getItem('token')));
  }

  unsubscribeToFlashCard(courseID: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/unsubscribe/${courseID}`, null ,makeHeader(this.myLocalStorage.getItem('token')));
  }
  createFlashCardSet(flashCardSet: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, flashCardSet, makeHeader(this.myLocalStorage.getItem('token')));
  }

  updateFlashCardSet(id: number, flashCardSet: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, flashCardSet);
  }



  publishFlashCardSet(id: string): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/publish/${id}`,null);
  }

  deleteFlashCardSet(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }




}