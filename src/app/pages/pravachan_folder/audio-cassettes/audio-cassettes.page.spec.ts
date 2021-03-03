import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AudioCassettesPage } from './audio-cassettes.page';

describe('AudioCassettesPage', () => {
  let component: AudioCassettesPage;
  let fixture: ComponentFixture<AudioCassettesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioCassettesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AudioCassettesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
