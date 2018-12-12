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

  public postItem(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data).pipe(
      map((response: any) => response
    ));
  }

  public getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getObjects`).pipe(
      map((response: any) => response
    ));
  }

  public putBucket(file): Observable<any> {
    console.log(file.name);
    return this.http.post(`${this.apiUrl}/${file.name}`, file, {headers: this.AccessHeaders}).pipe(
      map((response: any) => response
    ));
  }
  public getFile(file: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${file}`).pipe(
      map((response: any) => response
    ));
  }

  
  public getSignedUrl(): Observable<any> {
    return this.http.get(`${this.apiUrl}/getUrl`).pipe(
      map((response: any) => response
    ));
  }

}
