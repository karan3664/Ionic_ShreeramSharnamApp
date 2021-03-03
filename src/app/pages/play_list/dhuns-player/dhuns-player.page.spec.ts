import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DhunsPlayerPage } from './dhuns-player.page';

describe('DhunsPlayerPage', () => {
  let component: DhunsPlayerPage;
  let fixture: ComponentFixture<DhunsPlayerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DhunsPlayerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DhunsPlayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
