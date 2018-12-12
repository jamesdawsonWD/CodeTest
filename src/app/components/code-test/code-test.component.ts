import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';
@Component({
  selector: 'app-code-test',
  templateUrl: './code-test.component.html',
  styleUrls: ['./code-test.component.scss']
})


export class CodeTestComponent {

  public file: File;
  public form = new FormGroup({
    file: new FormControl ('', [Validators.required])
  });

  constructor(private httpService: HttpService) {
  }

  public fileChanged(e): void {
    this.file = e.target.files[0];
  }

  public onSubmit(): void {
    this.httpService.putBucket(this.file).subscribe();
  }
}
