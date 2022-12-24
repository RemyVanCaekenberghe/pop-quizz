import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Theme } from 'src/app/model/theme';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-individual-question',
  templateUrl: './individual-question.component.html',
  styleUrls: ['./individual-question.component.scss']
})
export class IndividualQuestionComponent implements OnInit {

  themes: Array<Theme> | undefined;
  themeProgression = 0;
  questionProgression = 0;
  themeSize: number | undefined;
  answered = false;

  constructor(private questionService: QuestionService,
              private router: Router) { }

  ngOnInit(): void {
    this.questionService.getThemes().subscribe(themes => this.themes = themes.filter(theme => theme.individualQuestions));
  }

  enableNextQuestion(): void {
    this.answered = true;
  }

  nextQuestion(): void {
    this.answered = false;
    this.questionProgression++;
    if(this.questionProgression === this.currentTheme()?.individualQuestions.length) {
      this.themeProgression++;
      this.questionProgression = 0;
    }

    if(this.themeProgression === this.themes?.length) {
      this.router.navigate(['/game/dancefloor'])
    }
  }

  loadIndividualQuestion(): void {
    this.themeProgression = 0;
    this.questionProgression = 0;
  }

  currentTheme(): Theme | undefined {
    return !this.themes ? undefined : this.themes[this.themeProgression];
  }
}
