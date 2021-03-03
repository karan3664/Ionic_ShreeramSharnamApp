import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TabsDownloadPage } from './tabs-download.page';

describe('TabsDownloadPage', () => {
  let component: TabsDownloadPage;
  let fixture: ComponentFixture<TabsDownloadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsDownloadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TabsDownloadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
