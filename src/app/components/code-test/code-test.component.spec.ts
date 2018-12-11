import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { CodeTestComponent } from './code-test.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../../services/http.service';

describe('CodeTestComponent', () => {
  let component: CodeTestComponent;
  let fixture: ComponentFixture<CodeTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CodeTestComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [
        HttpService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
    inject([HttpService], (injectService: HttpService) => {
      expect(injectService).toBe(TestBed.get(HttpService));
    })
);
});
