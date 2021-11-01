import { User } from './user';

export class Result {
  user!: User;
  quiz!: string;
  scoredMarks!: number;
  totalMarks!: number;
  isPassed!: boolean;
}
