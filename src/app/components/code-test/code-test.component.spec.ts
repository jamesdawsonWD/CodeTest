import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { async, ComponentFixture, TestBed, inject, fakeAsync } from '@angular/core/testing';
import { CodeTestComponent } from './code-test.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from '../../services/http.service';

describe('CodeTestComponent', () => {
  let component: CodeTestComponent;
  let fixture: ComponentFixture<CodeTestComponent>;
  let formGroup;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CodeTestComponent
      ],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ReactiveFormsModule
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
    formGroup = component.form.controls;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Service injected via inject(...) and TestBed.get(...) should be the same instance', () => {
    inject([HttpService], (injectService: HttpService) => {
      expect(injectService).toBe(TestBed.get(HttpService));
    });
  });

  it('Component should contain and form group that contains at least a file selection input', function() {
    expect(formGroup.file).toBeTruthy();
  });

});
