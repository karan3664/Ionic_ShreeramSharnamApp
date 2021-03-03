import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrayercentersPage } from './prayercenters.page';

describe('PrayercentersPage', () => {
  let component: PrayercentersPage;
  let fixture: ComponentFixture<PrayercentersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayercentersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrayercentersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
