import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { CoreModuleExampleComponent } from './core-module-example.component';

describe('CoreModuleExampleComponent', () => {

  let component: CoreModuleExampleComponent;
  let fixture: ComponentFixture<CoreModuleExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CoreModuleExampleComponent,
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreModuleExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));
});
