import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContainerComponent } from './main-container.component';
import { CharacterSelectComponent } from '../character-select/character-select.component';
import { FramedataTableComponent } from '../framedata-table/framedata-table.component';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { ActivatedRoute } from '@angular/router';

describe('MainContainerComponent', () => {
  let component: MainContainerComponent;
  let fixture: ComponentFixture<MainContainerComponent>;
  let activatedRoute: ActivatedRouteStub;

  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();
    activatedRoute.setParamMap({ character: 'Abigail' });
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainContainerComponent,
        CharacterSelectComponent,
        FramedataTableComponent
      ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
