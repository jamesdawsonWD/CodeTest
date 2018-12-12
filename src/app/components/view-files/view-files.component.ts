import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-view-files',
  templateUrl: './view-files.component.html',
})
export class ViewFilesComponent {

  public items$ = this.httpService.getAll();

  constructor(private httpService: HttpService) {
    this.getFile('out-declan.txt');
  }

  public getFile(file: string): void {
    console.log(file, 'in view files');
    this.httpService.getFile(file).subscribe((res) => {
      window.location.href = res.data;
    });
  }

}
