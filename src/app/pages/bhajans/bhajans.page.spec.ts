import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BhajansPage } from './bhajans.page';

describe('BhajansPage', () => {
  let component: BhajansPage;
  let fixture: ComponentFixture<BhajansPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BhajansPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BhajansPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
