import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpResponse, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: "root"
})
export class ToastrInterceptorService implements HttpInterceptor {

  constructor(public toastr: ToastrService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log('something');

    return next.handle(req).pipe(tap((success) => {
      this.toastr.success('Hello world!', 'Toastr fun!');
    }), catchError((err) => {
      console.log(err);
      this.toastr.error()
      throw err
    }));
  }
}
