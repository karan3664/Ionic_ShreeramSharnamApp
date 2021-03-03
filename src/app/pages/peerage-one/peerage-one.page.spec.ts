import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeerageOnePage } from './peerage-one.page';

describe('PeerageOnePage', () => {
  let component: PeerageOnePage;
  let fixture: ComponentFixture<PeerageOnePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeerageOnePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeerageOnePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
