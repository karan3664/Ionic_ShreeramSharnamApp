import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PravachanDownloadlistPage } from './pravachan-downloadlist.page';

describe('PravachanDownloadlistPage', () => {
  let component: PravachanDownloadlistPage;
  let fixture: ComponentFixture<PravachanDownloadlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PravachanDownloadlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PravachanDownloadlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
