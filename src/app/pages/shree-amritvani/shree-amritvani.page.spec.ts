import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShreeAmritvaniPage } from './shree-amritvani.page';

describe('ShreeAmritvaniPage', () => {
  let component: ShreeAmritvaniPage;
  let fixture: ComponentFixture<ShreeAmritvaniPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShreeAmritvaniPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShreeAmritvaniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
