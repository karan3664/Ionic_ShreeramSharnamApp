import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NaamDeekshaPage } from './naam-deeksha.page';

describe('NaamDeekshaPage', () => {
  let component: NaamDeekshaPage;
  let fixture: ComponentFixture<NaamDeekshaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaamDeekshaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NaamDeekshaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
