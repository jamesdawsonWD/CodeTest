import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
@Component({
  selector: 'app-code-test',
  templateUrl: './code-test.component.html',
  styleUrls: ['./code-test.component.scss']
})
export class CodeTestComponent implements OnInit {

  public data = {
    'eventDetails': 'This is a test Event',
    'eventType': 'test',
    'description': 'This is a test'
  };
  public items$ = this.httpService.getAll();
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    console.log(this.items$);
    this.httpService.postItem(this.data).subscribe(res => {
    });
    this.httpService.getAll().subscribe(res => {
      console.log(res);
    });
  }

}
