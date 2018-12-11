import { TestBed, async, inject } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {RouterTestingModule} from '@angular/router/testing';
import {Router} from '@angular/router';
class MockRouter {
  navigateByUrl(url: string) { return url; }
}
describe('AppComponent', () => {
  let fixture;
  let app;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        {
          provide: Router,
          useClass: MockRouter
        }
      ]
    }).compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AppComponent);
        app = fixture.debugElement.componentInstance;
      });
    }
  ));
  it('should create the app', async(() => {

    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Super Awesome Code Test'`, async(() => {

    expect(app.title).toEqual('Super Awesome Code Test');
  }));
  it('should have a router outlet', async(() => {
    fixture.detectChanges();
    app = fixture.debugElement.nativeElement;
    expect(app.querySelector('router-outlet')).toBeTruthy();
  }));

});
