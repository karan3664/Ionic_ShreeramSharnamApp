import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RamayansaarPage } from './ramayansaar.page';

describe('RamayansaarPage', () => {
  let component: RamayansaarPage;
  let fixture: ComponentFixture<RamayansaarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RamayansaarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RamayansaarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
