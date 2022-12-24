import { GameModule } from './game/game.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/game',
        pathMatch: 'full'
      },
      {
        path: 'game', loadChildren: () => import('./game/game-routing.module').then(module => module.GameRoutingModule)
      }
    ])
  ]
})
export class AppRoutingModuleModule { }
