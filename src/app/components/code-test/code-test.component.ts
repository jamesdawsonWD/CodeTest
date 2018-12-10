import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';
@Component({
  selector: 'app-code-test',
  templateUrl: './code-test.component.html',
  styleUrls: ['./code-test.component.scss']
})
export class CodeTestComponent implements OnInit {

  public items: Array<String>;
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    const data = {
      "eventDetails": "This is a test Event",
      "eventType": "test",
      "description": "This is a test"
    };
    this.httpService.postItem(data).subscribe(res => {
      console.log(this.items);
    });
    this.httpService.getAll(data).subscribe(res => {
      this.items = res.data;
      console.log(this.items);
    });
  }

}
