import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DancefloorQuestion } from './../../model/dancefloor-question';

export interface DialogData {
  question: DancefloorQuestion;
}

@Component({
  selector: 'question-dialog',
  templateUrl: './question.dialog.html',
  styleUrls: ['./question.dialog.scss']
})
export class QuestionDialog {

  isAllowedToBeClosed = false;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DancefloorQuestion) {
    console.log(this.data);
  }

  allowClosure(): void {
    this.isAllowedToBeClosed = true;
  }
}
