import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AudiogranthDownloadlistPage } from './audiogranth-downloadlist.page';

describe('AudiogranthDownloadlistPage', () => {
  let component: AudiogranthDownloadlistPage;
  let fixture: ComponentFixture<AudiogranthDownloadlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudiogranthDownloadlistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AudiogranthDownloadlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
