import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    })
  };

  private _apiEndPoint: string = environment.baseUrl;
  public _url: string = '';

  public enableSpinner: boolean = true;

  constructor(private _http: HttpClient) {

  }

  // common method
  makeRequest<TData>(method: string, url: string, data: any, headers: HttpHeaders = this.httpOptions.headers)
    : Observable<any> {



    let finalUrl: string = this._apiEndPoint + url;
    let body: any = null;
    if (method.toUpperCase() == 'GET') {
      var objectToQueryString = this.objectToQueryString(data);
      if (objectToQueryString != '') {
        finalUrl += '?' + objectToQueryString;
      }
    }
    else {
      body = data;
    }

    return this.mapAndCatchError<TData>(
      this._http.request<any>(
        method.toUpperCase(),
        finalUrl,
        { body: body, headers: headers })
    );
  }

  /////// private methods
  private mapAndCatchError<TData>(response: Observable<any>)
    : Observable<any> {
    return response.pipe(
      map((r: TData) => {



        return r;
      }),
      catchError((err: HttpErrorResponse) => {
        // this.Response.Code = "002";
        // this.translate.get('GenericMessages.UnknowError').subscribe((data: any) => {
        //   this.Response.Description = data;
        // });
        // if (this.enableSpinner) {
        //   this.spinner.hide("baseSpinner");
        // }
        console.log(err);
        return of(<TData>{});
      })
    );
  }

  private objectToQueryString(obj: any): string {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }

  downloadFile(url: any): Observable<Blob> {
    return this._http.get(this._apiEndPoint + url, {
      responseType: 'blob'
    });
  }

  public toggleSpinner() {
    this.enableSpinner = !this.enableSpinner;
  }
}
