import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BhajansDownloadlistPage } from './bhajans-downloadlist.page';

describe('BhajansDownloadlistPage', () => {
  let component: BhajansDownloadlistPage;
  let fixture: ComponentFixture<BhajansDownloadlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhajansDownloadlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BhajansDownloadlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
