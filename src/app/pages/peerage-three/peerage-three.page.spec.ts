import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeerageThreePage } from './peerage-three.page';

describe('PeerageThreePage', () => {
  let component: PeerageThreePage;
  let fixture: ComponentFixture<PeerageThreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeerageThreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeerageThreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
