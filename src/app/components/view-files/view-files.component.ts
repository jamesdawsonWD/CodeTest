import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { StoreService } from '../../services/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-files',
  templateUrl: './view-files.component.html',
})
export class ViewFilesComponent {

  public display = false;
  constructor(
    private httpService: HttpService,
    public store: StoreService,
    public router: Router
  ) {
    setTimeout( () => { this.display = true; }, 10000); // yes... this is a fake progress bar...
  }


  /**
   *  Subscribes to get fileSignedUrl obseravle in http service
   *  if there is not an error it will pop a message and then navigate back to the landing-page
   * @param file the name of the file to be get
   */
  public getFile(file: string): void {
    this.httpService.getFileSignedUrl(file.replace('in-', 'out-')).subscribe((res) => {
      if (!res.error) window.open(res.data, '_blank');
      this.router.navigate(['/']);
    });
  }

}
