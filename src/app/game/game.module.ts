import { DancefloorComponent } from './dancefloor/dancefloor.component';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { QuestionService } from './../service/question.service';
import { GameRoutingModule } from './game-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TitleScreenComponent } from './title-screen/title-screen.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionComponent } from './question/question.component';
import { ThemeComponent } from './theme/theme.component';
import { IndividualQuestionComponent } from './individual-question/individual-question.component';
import { CommonModule } from '@angular/common';
import { QuestionDialog } from './question-dialog/question.dialog';


@NgModule({
  declarations: [
    TitleScreenComponent,
    IndividualQuestionComponent,
    QuestionComponent,
    ThemeComponent,
    DancefloorComponent,
    QuestionDialog
  ],
  imports: [
    CommonModule,
    BrowserModule,
    GameRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatProgressBarModule,
    MatGridListModule,
    MatDialogModule
  ],
  exports: [
    GameRoutingModule
  ],
  providers: [
    QuestionService
  ]
})
export class GameModule { }
