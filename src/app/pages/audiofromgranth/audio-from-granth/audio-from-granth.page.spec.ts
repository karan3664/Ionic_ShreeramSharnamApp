import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AudioFromGranthPage } from './audio-from-granth.page';

describe('AudioFromGranthPage', () => {
  let component: AudioFromGranthPage;
  let fixture: ComponentFixture<AudioFromGranthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioFromGranthPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AudioFromGranthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
