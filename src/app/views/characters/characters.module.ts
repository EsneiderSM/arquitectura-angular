import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { ListCharacterComponent } from './list-character/list-character.component';
import { CharactersService } from '../../shared/services/characters.service';


@NgModule({
  declarations: [
    ListCharacterComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule
  ],
  providers:[
    CharactersService
  ]
})
export class CharactersModule { }
