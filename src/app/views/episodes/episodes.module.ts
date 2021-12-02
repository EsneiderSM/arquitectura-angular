//Modulos
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EpisodesService } from '../../shared/services/episodes.service';
import { EpisodesRoutingModule } from './episodes-routing.module';
import { ListEpisodesComponent } from './list-episodes/list-episodes.component';

@NgModule({
    imports: [
      CommonModule,
      EpisodesRoutingModule
    ],
    declarations: [
      ListEpisodesComponent
    ],
    providers: [
      EpisodesService
    ]
  })
  export class EpisodesModule { }