import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-view-files',
  templateUrl: './view-files.component.html',
  styleUrls: ['./view-files.component.scss']
})
export class ViewFilesComponent implements OnInit {

  public items$ = this.httpService.getAll();

  constructor(private httpService: HttpService) { }
  ngOnInit() {

  }

}
