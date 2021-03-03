import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DhunAudioPage } from './dhun-audio.page';

describe('DhunAudioPage', () => {
  let component: DhunAudioPage;
  let fixture: ComponentFixture<DhunAudioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhunAudioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DhunAudioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
