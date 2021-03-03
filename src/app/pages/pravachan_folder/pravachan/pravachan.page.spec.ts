import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PravachanPage } from './pravachan.page';

describe('PravachanPage', () => {
  let component: PravachanPage;
  let fixture: ComponentFixture<PravachanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PravachanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PravachanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
