import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsLetterPage } from './news-letter.page';

describe('NewsLetterPage', () => {
  let component: NewsLetterPage;
  let fixture: ComponentFixture<NewsLetterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsLetterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsLetterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
