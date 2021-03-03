import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LikefacebookPage } from './likefacebook.page';

describe('LikefacebookPage', () => {
  let component: LikefacebookPage;
  let fixture: ComponentFixture<LikefacebookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikefacebookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LikefacebookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
