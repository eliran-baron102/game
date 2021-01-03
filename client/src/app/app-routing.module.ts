import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './pages/games/games.component';
import { GameComponent } from './pages/game/game.component';

const routes: Routes = [{
    path: '',
    component:GamesComponent
  },
  {
    path: 'game/:id',
    component: GameComponent,
  }];


@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }




