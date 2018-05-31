import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManqueIdeeComponent } from './manque-idee.component';

describe('ManqueIdeeComponent', () => {
  let component: ManqueIdéeComponent;
  let fixture: ComponentFixture<ManqueIdéeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManqueIdeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManqueIdeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
