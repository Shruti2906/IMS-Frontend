import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';

import { Observable } from 'rxjs';

import { StorageService } from 'src/app/services/storage.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private storageService:StorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.url.includes(environment.api)) {
      const token=this.storageService.getToken();
      const tokenheader=request.clone({
        setHeaders:{
          Authorization:`Bearer ${token}`
        }
      });
      return next.handle(tokenheader);
    }
    return next.handle(request);
  }
}
