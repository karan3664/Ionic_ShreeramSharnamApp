import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegularsatsangPage } from './regularsatsang.page';

describe('RegularsatsangPage', () => {
  let component: RegularsatsangPage;
  let fixture: ComponentFixture<RegularsatsangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegularsatsangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegularsatsangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
