import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';

import { BaseService } from './base.service';
import { Router } from '@angular/router';
import { APIENDPOINT } from 'src/app/config/configuration';
import { CharacterModel } from '../models/characters/character.model';

@Injectable()
export class CharactersService extends BaseService<CharacterModel> {

  private apiURL: string;

  constructor(protected _http: HttpClient, private _router: Router) {
      super(_http, environment.apiURL, APIENDPOINT.characters);
      this.apiURL = environment.apiURL;
  }

}
