import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DownloadlistPage } from './downloadlist.page';

describe('DownloadlistPage', () => {
  let component: DownloadlistPage;
  let fixture: ComponentFixture<DownloadlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DownloadlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
