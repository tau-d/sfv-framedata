import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FramedataTableComponent } from './framedata-table.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';

describe('FramedataTableComponent', () => {
  let component: FramedataTableComponent;
  let fixture: ComponentFixture<FramedataTableComponent>;
  let activatedRoute: ActivatedRouteStub;

  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();
    activatedRoute.setParamMap({ character: 'Abigail' });
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FramedataTableComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
      ]
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
