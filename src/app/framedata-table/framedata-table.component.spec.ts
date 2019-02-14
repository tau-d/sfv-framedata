import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FramedataTableComponent } from './framedata-table.component';

describe('FramedataTableComponent', () => {
  let component: FramedataTableComponent;
  let fixture: ComponentFixture<FramedataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramedataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FramedataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
