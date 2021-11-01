import { Question } from './questions';

export class Quiz {
  id!: number;
  title!: string;
  desc!: string;
  questions!: Question[];
  answers!: number[];
}
