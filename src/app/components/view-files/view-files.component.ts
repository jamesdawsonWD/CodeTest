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


  public getFile(file: string): void {
    this.httpService.getFileSignedUrl(file.replace('in-', 'out-')).subscribe((res) => {
      window.open(res.data, '_blank');
      this.router.navigate(['/']);
    });
  }

}
