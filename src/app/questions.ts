export class Question {
  sno!: number;
  question!: string;
  options!: {
    sno: number;
    value: string;
  }[];
}
