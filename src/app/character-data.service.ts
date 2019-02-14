import { Injectable } from '@angular/core';

import CHARACTERS from '../assets/fatsfvframedatajson-master/sfv.json';


@Injectable({
  providedIn: 'root'
})

export class CharacterDataService {

  constructor() { }

  getAllCharacters(): {} {
    return CHARACTERS;
  }

  getCharacter(charName: string): {} {
    return CHARACTERS[charName];
  }
}
