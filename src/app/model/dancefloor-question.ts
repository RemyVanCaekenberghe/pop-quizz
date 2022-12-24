import { Question } from "./question";

export interface DancefloorQuestion {
  theme: string;
  themeId: string;
  question: Question;
  answered: boolean;
}
