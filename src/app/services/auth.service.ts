import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs/internal/Observable';
import { map } from "rxjs/operators";
import { LocalStorageService } from './localstorage.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { SocialAuthService } from "@abacritt/angularx-social-login";


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  constructor(
    private httpClient: HttpClient,
    private myLocalStorage:LocalStorageService,
    private socialAuthService: SocialAuthService
  ) {
  }

  login(): void {
    this.isAuthenticated = true;
  }
  
  jwtHelper = new JwtHelperService();

loginwithGoogle(TokenID : string) :  Observable<any>{

  const requestOptions: Object = {
    'Content-Type': 'application/json',
    responseType: 'text'
  }
  const requestObject = {
     "credential": TokenID
  };

  console.log(`${environment.apiUrl}/api/auth/LoginWithGoogle`);
  return this.httpClient.post(`${environment.apiUrl}/api/auth/LoginWithGoogle`, requestObject, requestOptions)
  .pipe(map(res => {
    let result = res;
    if (result) {

      this.myLocalStorage.setItem('token', result.toString());
      return true;
    }
    return false;
  }));
}

get currentUser() {
  let token = this.myLocalStorage.getItem('token');
  if (!token) return null;
  return this.jwtHelper.decodeToken(token);
}

  logout(): void {
  
    console.log({"State":this.socialAuthService.authState});
    this.socialAuthService.signOut();
    this.myLocalStorage.removeItem('token');
    location.reload();
  }

  isLoggedIn() {
    let token = this.myLocalStorage.getItem('token');
    if (!token)
      return false;
    return !this.jwtHelper.isTokenExpired(token);
  }
}
