import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JoinfacebookPage } from './joinfacebook.page';

describe('JoinfacebookPage', () => {
  let component: JoinfacebookPage;
  let fixture: ComponentFixture<JoinfacebookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinfacebookPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JoinfacebookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
