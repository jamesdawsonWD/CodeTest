import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import IMap from '../../models/map';
import { HttpService } from '../../services/http.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-code-test',
  templateUrl: './code-test.component.html',
})


export class CodeTestComponent {

  public file: File;
  public data;
  public anagrams: IMap<string[]> = {};
  public fileForm = new FormGroup({
    file: new FormControl(),
  });


  constructor(private httpService: HttpService, private router: Router) {
  }

  public fileChanged(e): void {
    this.file = e.target.files[0];
  }

  public onSubmit(): void {

    this.httpService.putBucket(this.file).subscribe((response) => { console.log(response));
  }

}
