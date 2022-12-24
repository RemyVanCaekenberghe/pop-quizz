import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TitleScreenComponent } from './title-screen/title-screen.component';
import { IndividualQuestionComponent } from './individual-question/individual-question.component';
import { DancefloorComponent } from './dancefloor/dancefloor.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'game',
        component: TitleScreenComponent
      },
      {
        path: 'game/individual',
        component: IndividualQuestionComponent
      },
      {
        path: 'game/dancefloor',
        component: DancefloorComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class GameRoutingModule { }
