import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CharacterSelectComponent } from './character-select.component';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteStub } from 'src/testing/activated-route-stub';
import { By } from '@angular/platform-browser';

describe('CharacterSelectComponent', () => {
  let component: CharacterSelectComponent;
  let fixture: ComponentFixture<CharacterSelectComponent>;
  let activatedRoute: ActivatedRouteStub;

  function createComponent() {
    fixture = TestBed.createComponent(CharacterSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  beforeEach(() => {
    activatedRoute = new ActivatedRouteStub();
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSelectComponent ],
      imports: [ RouterTestingModule ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
      ]
    })
    .compileComponents();
  }));

  it('should create', () => {
    activatedRoute.setParamMap({ character: 'Abigail' });
    createComponent();
    expect(component).toBeTruthy();
  });

  it('should initially select character given by route', () => {
    const selChar = "Cammy";
    activatedRoute.setParamMap({ character: selChar });
    createComponent();

    const charSelect = fixture.debugElement.query(By.css('#charSelect'));
    const selected = charSelect.query(By.css("option[selected='selected']"));

    expect(component.selectedCharacter).toEqual(selChar);
    expect(selected.nativeElement.value).toEqual(selChar);
  });

  it('should initially select character mode given by route', () => {
    const selChar = "Akuma";
    const selMode = "vtOne";
    activatedRoute.setParamMap({ character: selChar, charMode: selMode });
    createComponent();

    const charModeSelect = fixture.debugElement.query(By.css('#charModeSelect'));
    const modeSelected = charModeSelect.query(By.css("option[selected='selected']"));
    const charSelect = fixture.debugElement.query(By.css('#charSelect'));
    const charSelected = charSelect.query(By.css("option[selected='selected']"));

    expect(component.selectedCharacter).toEqual(selChar);
    expect(component.selectedCharacterMode).toEqual(selMode);
    expect(charSelected.nativeElement.value).toEqual(selChar);
    expect(modeSelected.nativeElement.value).toEqual(selMode);
  });
});
