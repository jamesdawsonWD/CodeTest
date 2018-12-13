import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';
import { StoreService } from '../../services/store.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-code-test',
  templateUrl: './code-test.component.html',
})


export class CodeTestComponent {

  public file: File;
  public loading = false;
  public error = '';
  public form = new FormGroup({
    file: new FormControl('', [Validators.required])
  });


  constructor(
    private httpService: HttpService,
    private store: StoreService,
    private router: Router
  ) {
  }

  public fileChanged(e): void {
    this.store.file = e.target.files[0];
  }

  public onSubmit(): void {
    this.loading = true;
    this.httpService.putBucket(this.store.file).subscribe((res) => {
      if (!res.error) this.router.navigate(['/view-files']);
      this.loading = false;
      this.error = res.error;
    }
    );
  }

}
