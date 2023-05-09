import { HttpHeaders } from '@angular/common/http';

export function makeHeader(token:any) {
  return {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': token
    })
  };
}

export function makeHeaderWithText(token:any) {
  return {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'x-auth-token': token
    }).set('Content-Type', 'text/plain; charset=utf-8')
  };
}
