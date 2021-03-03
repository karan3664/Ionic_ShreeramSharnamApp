import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EBooksPage } from './e-books.page';

describe('EBooksPage', () => {
  let component: EBooksPage;
  let fixture: ComponentFixture<EBooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EBooksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
