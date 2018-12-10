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

  constructor(private http: HttpClient) {
   }

  public postItem(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, data).pipe(
      map((response: any) => response
    ));
  }

  public getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}`).pipe(
      map((response: any) => response
    ));
  }
}
