import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AbouttrustPage } from './abouttrust.page';

describe('AbouttrustPage', () => {
  let component: AbouttrustPage;
  let fixture: ComponentFixture<AbouttrustPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbouttrustPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AbouttrustPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
