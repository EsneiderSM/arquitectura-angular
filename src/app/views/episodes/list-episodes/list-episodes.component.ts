import { Component, OnInit } from '@angular/core';
import { EpisodesService } from '../../../shared/services/episodes.service';
import { EpisodeModel } from '../../../shared/models/episodes/episode.model';
import { InfoModel } from '../../../shared/models/common/info.model';

@Component({
  selector: 'app-list-episodes',
  templateUrl: './list-episodes.component.html',
  styleUrls: ['./list-episodes.component.scss']
})
export class ListEpisodesComponent implements OnInit {

  info: InfoModel;
  listEpisodes: EpisodeModel [];

  constructor(
    private episodesService: EpisodesService
  ) { }

  ngOnInit(): void {
    this.getAllEpisodes();
  }

  getAllEpisodes() {

    this.episodesService.getAll()
      .subscribe(response => {
        this.listEpisodes = response.results;
        this.info = response.info;
      }, error => {
        console.error(error);
      })

  }

}
