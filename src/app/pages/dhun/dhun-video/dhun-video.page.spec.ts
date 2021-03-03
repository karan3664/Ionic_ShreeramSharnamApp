import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DhunVideoPage } from './dhun-video.page';

describe('DhunVideoPage', () => {
  let component: DhunVideoPage;
  let fixture: ComponentFixture<DhunVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhunVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DhunVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
