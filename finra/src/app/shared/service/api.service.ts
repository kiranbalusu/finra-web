import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';

import { ToastrService } from 'ngx-toastr';


const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'application/json',
    'Acess-Control-Allow-Origin' : '*',
    'Acess-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
   })
};

let _error_message: string;
let _error_code: number;

@Injectable()
export class ApiService {
  constructor(
    private _http: HttpClient,
    private toastrService: ToastrService
  ) {}

  // private formatErrors(error: any) {
  //   console.log(error);
  //   _error_message = error.message;
  //   _error_code = error;
  //   this.toastrService.error(_error_message, _error_message, {
  //     closeButton: true
  //   });

  //   return throwError(_error_message);
  // }

 

  showError = (error: any) => {
    this.toastrService.error(error.error.message, 'Error', {
      closeButton: true
    });

    return throwError(error.error);
  };

  get(
    path: string,
    baseUrl: string,
    params: HttpParams = new HttpParams()
  ): Observable<any> {
    //this.showLoader();
    return this._http.get(`${baseUrl}${path}`, { params }).pipe(
      catchError(this.showError)
      //finalize(this.hideLoader)
    );
  }

  put(path: string, baseUrl: string, body: Object = {}): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http
      .put(`${baseUrl}${path}`, JSON.stringify(body), httpOptions)
      .pipe(
        catchError(this.showError)
      );
  }

  post(path: string, baseUrl: string, body: Object = {}): Observable<any> {
    console.log('Request URL' + `${baseUrl}${path}`);
    console.log('Request: ' + JSON.stringify(body));
    return this._http.post(`${baseUrl}${path}`, body, httpOptions).pipe(
      catchError(this.showError)
    );
  }


  put1(path: string, baseUrl: string, body: Object = {}): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Expose-Headers': 'Access-Control-*',
        'Access-Control-Allow-Headers':
          'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
        'Access-Control-Allow-Origin': '*',
        Allow: 'GET, POST, PUT, DELETE, OPTIONS, HEAD'
      })
    };
    return this._http
      .put(`${baseUrl}${path}`, JSON.stringify(body), httpOptions)
      .pipe(
        catchError(this.showError)
      );
  }

  /**
   * This is temporary helper method to invoke RESTful Web Services.
   * TODO: Delete/Modify after review
   * @param base_api_url
   * @param path
   * @param body
   */
  post_v2(
    base_api_url: string,
    path: string,
    body: Object = {}
  ): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Expose-Headers': 'Access-Control-*',
        'Access-Control-Allow-Headers':
          'Access-Control-*, Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS, HEAD',
        'Access-Control-Allow-Origin': '*',
        Allow: 'GET, POST, PUT, DELETE, OPTIONS, HEAD'
      })
    };
    return this._http
      .post(`${base_api_url}${path}`, body, httpOptions)
      .pipe(catchError(this.showError));
  }

  delete(path: string, baseUrl: string): Observable<any> {
    //this.showLoader();

    return this._http.delete(`${baseUrl}${path}`).pipe(
      catchError(this.showError)
     // finalize(this.hideLoader)
    );
  }
}
