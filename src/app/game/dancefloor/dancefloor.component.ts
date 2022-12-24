import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Theme } from 'src/app/model/theme';
import { QuestionService } from 'src/app/service/question.service';
import { QuestionDialog } from '../question-dialog/question.dialog';
import { DancefloorQuestion } from './../../model/dancefloor-question';

@Component({
  selector: 'app-dancefloor',
  templateUrl: './dancefloor.component.html',
  styleUrls: ['./dancefloor.component.scss']
})
export class DancefloorComponent implements OnInit {

  questions: Array<DancefloorQuestion> | undefined;
  themes: Array<Theme> | undefined;
  started = false;
  randomizing = false;

  constructor(private questionService: QuestionService,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.questionService.getThemes().subscribe(themes => {
      this.themes = themes.filter(theme => theme.questions);
      this.questions = this.themes.flatMap((theme) => theme.questions.map((question) => {
        return {
          theme: theme.name,
          question: question,
          themeId: theme.id,
          answered: false
        }
      }));
    });
  }

  randomizeQuestions() {
    if (this.questions) {
      this.questions = this.shuffle(this.questions);
      this.randomizing = true;
    }

    setTimeout(() => {
      this.started = true
      this.randomizing = false
    }, 5000);
  }

  displayQuestion(question: DancefloorQuestion) {
    if (this.started) {
      this.dialog.open(QuestionDialog, { disableClose: true, data: question })
        .afterClosed()
        .subscribe(() => question.answered = true);
    }
  }

  private shuffle(questions: DancefloorQuestion[]): DancefloorQuestion[] {
    let currentIndex = questions.length
    let randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [questions[currentIndex], questions[randomIndex]] = [
        questions[randomIndex], questions[currentIndex]];
    }

    return questions;
  };
}
