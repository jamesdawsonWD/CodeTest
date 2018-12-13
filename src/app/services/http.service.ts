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
    * @return an observable with the http response mapped
    */
  public putBucket(file): Observable<any> {
    return this.http.post(`${this.apiUrl}/in-${file.name}`, file).pipe(
      map((response: any) => response
    ));
  }
  /**
   * @param fileName the name of the file that you want to retrieve
   * @return an observable with the http response mapped
   */
  public getFileSignedUrl(fileName: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/out-${fileName}`).pipe(
      map((response: any) => response
    ));
  }


}
