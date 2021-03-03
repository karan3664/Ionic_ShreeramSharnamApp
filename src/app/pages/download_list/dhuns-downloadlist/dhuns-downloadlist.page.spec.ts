import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DhunsDownloadlistPage } from './dhuns-downloadlist.page';

describe('DhunsDownloadlistPage', () => {
  let component: DhunsDownloadlistPage;
  let fixture: ComponentFixture<DhunsDownloadlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhunsDownloadlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DhunsDownloadlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
