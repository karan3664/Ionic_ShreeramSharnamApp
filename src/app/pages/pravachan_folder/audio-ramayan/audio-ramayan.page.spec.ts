import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AudioRamayanPage } from './audio-ramayan.page';

describe('AudioRamayanPage', () => {
  let component: AudioRamayanPage;
  let fixture: ComponentFixture<AudioRamayanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioRamayanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AudioRamayanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
