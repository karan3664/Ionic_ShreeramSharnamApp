import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DhunsVideoPage } from './dhuns-video.page';

describe('DhunsVideoPage', () => {
  let component: DhunsVideoPage;
  let fixture: ComponentFixture<DhunsVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhunsVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DhunsVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
