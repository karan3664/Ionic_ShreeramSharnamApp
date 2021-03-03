import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DhunsAudioPage } from './dhuns-audio.page';

describe('DhunsAudioPage', () => {
  let component: DhunsAudioPage;
  let fixture: ComponentFixture<DhunsAudioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhunsAudioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DhunsAudioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
