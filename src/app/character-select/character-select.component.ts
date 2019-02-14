import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { CharacterDataService } from '../character-data.service';


@Component({
  selector: 'app-character-select',
  templateUrl: './character-select.component.html',
  styleUrls: ['./character-select.component.css']
})

export class CharacterSelectComponent implements OnInit {
  characters : {};
  characterData : {};
  selectedCharacter : string;
  selectedCharacterMode : string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private charDataService: CharacterDataService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedCharacter = params.get('character');
      this.selectedCharacterMode = params.get('charMode') == null ? 'normal' : params.get('charMode');
      this.characterData = this.charDataService.getCharacter(this.selectedCharacter);
    });
    this.characters = this.charDataService.getAllCharacters();
    console.log(this.characters);
  }

  onCharacterSelect(newVal) {
    this.router.navigate(['/' + newVal]);
  }

  onCharacterModeSelect(newVal) {
    this.router.navigate(['/' + this.selectedCharacter, { charMode: newVal}]);
  }

  isEmpty(obj: {}) {
    return Object.keys(obj).length === 0;
  }
}
