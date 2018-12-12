import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private apiUrl = environment.apiUrl;
  private AccessHeaders = {
    'Access-Control-Allow-Credentials' : 'true',
    'Access-Control-Allow-Origin': '*',
};
  constructor(private http: HttpClient) {
   }


  public putBucket(file): Observable<any> {
    return this.http.post(`${this.apiUrl}${file.name}`, file, {headers: this.AccessHeaders}).pipe(
      map((response: any) => response
    ));
  }
  public getBucketByUrl(url: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/getUrl`).pipe(
      map((response: any) => response
    ));
  }

  
  public getSignedUrl(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getUrl`).pipe(
      map((response: any) => response
    ));
  }

}
