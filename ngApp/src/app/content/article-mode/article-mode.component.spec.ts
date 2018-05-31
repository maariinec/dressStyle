import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleModeComponent } from './article-mode.component';

describe('ArticleModeComponent', () => {
  let component: ArticleModeComponent;
  let fixture: ComponentFixture<ArticleModeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleModeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
