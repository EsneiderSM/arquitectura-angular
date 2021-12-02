import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/start/start.module').then(m => m.StartModule)
  },
  {
    path: 'episodes',
    loadChildren: () => import('./views/episodes/episodes.module').then(m => m.EpisodesModule)
  },
  {
    path: 'character',
    loadChildren: () => import('./views/characters/characters.module').then(m => m.CharactersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
