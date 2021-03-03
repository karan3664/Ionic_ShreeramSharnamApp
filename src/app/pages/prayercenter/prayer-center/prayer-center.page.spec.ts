import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrayerCenterPage } from './prayer-center.page';

describe('PrayerCenterPage', () => {
  let component: PrayerCenterPage;
  let fixture: ComponentFixture<PrayerCenterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrayerCenterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrayerCenterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
