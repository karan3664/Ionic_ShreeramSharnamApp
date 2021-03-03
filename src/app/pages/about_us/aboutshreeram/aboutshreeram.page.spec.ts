import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutshreeramPage } from './aboutshreeram.page';

describe('AboutshreeramPage', () => {
  let component: AboutshreeramPage;
  let fixture: ComponentFixture<AboutshreeramPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutshreeramPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutshreeramPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
