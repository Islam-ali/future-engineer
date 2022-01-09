import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';

import { REQUEST } from '@nguniversal/express-engine/tokens';
import * as express from 'express';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {
  private readonly DEFAULT_PORT = 4200;
  private readonly PORT = process.env['PORT'] || this.DEFAULT_PORT;
  
  constructor(@Inject(REQUEST) private request: express.Request) {}
  
  getBaseUrl(req: express.Request) {
    const { protocol, hostname } = req;
    return this.PORT ?
       `${protocol}://${hostname}:${this.PORT}` :
       `${protocol}://${hostname}`;
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (request.url.startsWith('./assets')) {
      const baseUrl = this.getBaseUrl(this.request);
      request = request.clone({
        url: `${baseUrl}/${request.url.replace('./assets','assets')}`
      });
    }
    return next.handle(request);
  }
}