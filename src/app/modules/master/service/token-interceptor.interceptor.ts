import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
 //#region added by Amandeep Virdhi on 06-08-2024 for API IN token(authorization) {ng g interceptor interceptor_name}
    const localToken = localStorage.getItem('token');
    if (localToken) {
      request = request.clone({
        headers: request.headers.set('Authorization', `Bearer ${localToken}`)
      });
    } else {
      console.warn('No token found in localStorage');
    }
    return next.handle(request);
    //#endregion
  }
  }
