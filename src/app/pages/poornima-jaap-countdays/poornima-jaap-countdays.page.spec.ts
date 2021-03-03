import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PoornimaJaapCountdaysPage } from './poornima-jaap-countdays.page';

describe('PoornimaJaapCountdaysPage', () => {
  let component: PoornimaJaapCountdaysPage;
  let fixture: ComponentFixture<PoornimaJaapCountdaysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoornimaJaapCountdaysPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PoornimaJaapCountdaysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
