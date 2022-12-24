import { Question } from './question';
export interface Theme {
  name: string;
  id: string;
  individualQuestions: Array<Question>;
  questions: Array<Question>;
  secret?: boolean;
}
