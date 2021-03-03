import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BhaktiprakashPage } from './bhaktiprakash.page';

describe('BhaktiprakashPage', () => {
  let component: BhaktiprakashPage;
  let fixture: ComponentFixture<BhaktiprakashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhaktiprakashPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BhaktiprakashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
