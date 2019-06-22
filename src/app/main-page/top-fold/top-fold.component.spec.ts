import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopFoldComponent } from './top-fold.component';

describe('TopFoldComponent', () => {
  let component: TopFoldComponent;
  let fixture: ComponentFixture<TopFoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopFoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopFoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
