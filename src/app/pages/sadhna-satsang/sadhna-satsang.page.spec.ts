import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SadhnaSatsangPage } from './sadhna-satsang.page';

describe('SadhnaSatsangPage', () => {
  let component: SadhnaSatsangPage;
  let fixture: ComponentFixture<SadhnaSatsangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SadhnaSatsangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SadhnaSatsangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
