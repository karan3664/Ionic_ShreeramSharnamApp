import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AudioVideoPage } from './audio-video.page';

describe('AudioVideoPage', () => {
  let component: AudioVideoPage;
  let fixture: ComponentFixture<AudioVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AudioVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
