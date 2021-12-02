// Modulos
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Componentes
import { ListEpisodesComponent } from './list-episodes/list-episodes.component';

const routes: Routes = [
  {
    path: '',
    component: ListEpisodesComponent
  },
  {
    path: '/lista',
    component: ListEpisodesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EpisodesRoutingModule { }
