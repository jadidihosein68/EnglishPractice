import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';
import { LocalStorageService } from './localstorage.service';
import { makeHeader } from '../utility/commonFunction';
import { UserProfile } from '../model/userProfile';


@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl = environment.apiUrl + '/api/user/getmyprofile';

  constructor(private http: HttpClient, private myLocalStorage : LocalStorageService) {}

  getMyUserProfile(): Observable<UserProfile> {
    return this.http.get<any>(`${this.apiUrl}`, makeHeader(this.myLocalStorage.getItem('token'))).pipe();
  }
}
