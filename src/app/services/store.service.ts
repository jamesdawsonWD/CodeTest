import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

    public signedUrl: string; // the last signed URL we have
    public file: string; // the most recent uploaded file

}
