import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Question } from 'src/app/model/question';

@Component({
  selector: 'question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnChanges {

  allowHints = false;
  answer: string | undefined;

  @Input()
  question: Question | undefined;

  @Input()
  standalone: boolean | undefined;

  @Output()
  answered = new EventEmitter();

  ngOnChanges(changes: SimpleChanges): void {
    if(changes["question"].currentValue?.answer !== this.answer) {
      this.answer = undefined;
      this.allowHints = false;
    }
  }

  displayHints(): void {
    this.allowHints = true;
  }

  selectAnswer(answer: string): void {
    this.displayAnswer();
  }

  displayAnswer(): void {
    this.answer = this.question?.answer;
    this.answered.emit();
  }
}
