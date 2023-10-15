import { Injectable } from '@angular/core';

import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private ngxLoader: NgxUiLoaderService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.ngxLoader.startLoader('loader-1'); // Show the loader

    return next.handle(req).pipe(
      finalize(() => {
        this.ngxLoader.stopLoader('loader-1'); // Hide the loader
      })
    );
  }
}

