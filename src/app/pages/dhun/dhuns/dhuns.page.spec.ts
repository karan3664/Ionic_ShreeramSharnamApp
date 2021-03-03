import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DhunsPage } from './dhuns.page';

describe('DhunsPage', () => {
  let component: DhunsPage;
  let fixture: ComponentFixture<DhunsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhunsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DhunsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
