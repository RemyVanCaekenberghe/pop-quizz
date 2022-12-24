import { Theme } from './../model/theme';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private httpClient: HttpClient) { }

  getThemes(): Observable<Array<Theme>> {
    return this.httpClient.get<Array<Theme>>('../assets/questions.json');
  }
}
