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

   /**
    * post request to api gateway that will put a file into a S3 bucket
    * @param file the file to be sent
    */
  public putBucket(file): Observable<any> {
    console.log(file.name);
    return this.http.post(`${this.apiUrl}/${file.name}`, file, {headers: this.AccessHeaders}).pipe(
      map((response: any) => response
    ));
  }
  /**
   * 
   * @param file the name of the file that you want to retrieve
   */
  public getFileSignedUrl(file: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${file}`).pipe(
      map((response: any) => response
    ));
  }


}
