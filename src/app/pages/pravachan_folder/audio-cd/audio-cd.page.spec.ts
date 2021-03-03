import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AudioCdPage } from './audio-cd.page';

describe('AudioCdPage', () => {
  let component: AudioCdPage;
  let fixture: ComponentFixture<AudioCdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioCdPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AudioCdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
