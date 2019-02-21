import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CharacterDataService } from '../character-data.service';


@Component({
  selector: 'app-framedata-table',
  templateUrl: './framedata-table.component.html',
  styleUrls: ['./framedata-table.component.css']
})

export class FramedataTableComponent implements OnInit {
  selectedCharacter : string;
  selectedCharacterMode : string;
  characterFramedata : any;

  constructor(
    private route: ActivatedRoute,
    private charDataService: CharacterDataService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedCharacter = params.get('character');
      this.selectedCharacterMode = params.get('charMode') == null ? 'normal' : params.get('charMode');
      this.characterFramedata = this.charDataService.getCharacter(this.selectedCharacter);
    });
  }

  defaultOrder = (a: any , b: any) => {
    return a.key;
  }
}
