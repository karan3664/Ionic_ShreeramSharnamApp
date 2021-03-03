import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PeeragePage } from './peerage.page';

describe('PeeragePage', () => {
  let component: PeeragePage;
  let fixture: ComponentFixture<PeeragePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeeragePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PeeragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
