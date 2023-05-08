import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environments';
import { Router, ActivatedRoute } from "@angular/router";
import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { SocialUser } from '@abacritt/angularx-social-login';

import { AuthService } from "../../services/auth.service"


@Component({
  selector: 'google-login-btn',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.scss']
})
export class GoogleLoginComponent implements OnInit {
  
  email?: string;
  password?: string;
  canShowLogin?: boolean;
  user: SocialUser | undefined;
  GoogleLoginProvider = GoogleLoginProvider;

  constructor(
    private readonly _socialAuthService: SocialAuthService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute

  ) {}

  ngOnInit(): void {
    this.canShowLogin = !environment.production;
    this._socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.authService.loginwithGoogle(user.idToken).subscribe(
        data => {
          let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          this.router.navigate([returnUrl || '/']);
        },
        error => {
          console.log({ "error": error });
        }
      );
    });
  }

  refreshGoogleToken(): void {
    this._socialAuthService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }

  getAccessToken(): void {
    // this._authService.getAccessToken(GoogleLoginProvider.PROVIDER_ID).then(accessToken => this.accessToken = accessToken);
    console.log({ "user": this.user });
  }
  signOut(): void {
    this._socialAuthService.signOut();
  }
}
