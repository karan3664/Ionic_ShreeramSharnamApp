import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeerageTwoPage } from './peerage-two.page';

describe('PeerageTwoPage', () => {
  let component: PeerageTwoPage;
  let fixture: ComponentFixture<PeerageTwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeerageTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeerageTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
