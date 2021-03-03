import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JaapCountPage } from './jaap-count.page';

describe('JaapCountPage', () => {
  let component: JaapCountPage;
  let fixture: ComponentFixture<JaapCountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JaapCountPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JaapCountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
