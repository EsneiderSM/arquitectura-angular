import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/services/characters.service';
import { CharacterModel } from '../../../shared/models/characters/character.model';
import { InfoModel } from '../../../shared/models/common/info.model';

@Component({
  selector: 'app-list-character',
  templateUrl: './list-character.component.html',
  styleUrls: ['./list-character.component.scss']
})
export class ListCharacterComponent implements OnInit {

  info: InfoModel;
  listCharacter: CharacterModel [];

  constructor(
    private _characterService: CharactersService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this._characterService.getAll()
      .subscribe(resp =>{
        
        this.listCharacter = resp.results;
        
      })
  }

}
