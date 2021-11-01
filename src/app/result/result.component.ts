import { Component, OnDestroy, OnInit } from '@angular/core';
import { Question } from '../questions';
import { Quiz } from '../quiz';
import { Result } from '../result';
import { User } from '../user';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit, OnDestroy {
  isPassed: boolean = false;
  user: User = {
    username: '',
    email: '',
  };
  questions: Question[] = [];
  givenAnswers: number[] = [];
  originalAnswers: number[] = [];
  quizTitle: string = '';

  totalMarks: number = 0;
  scoredMarks: number = 0;

  constructor() {
    console.log('inside Results component');
    var localAnswers = localStorage.getItem('givenAnswers');
    if (localAnswers === null) {
      this.givenAnswers = [];
    } else {
      this.givenAnswers = JSON.parse(localAnswers);
    }
    var localUser = localStorage.getItem('user');
    if (localUser === null) {
      this.user = this.user;
    } else {
      this.user = JSON.parse(localUser);
    }

    var localQuiz = localStorage.getItem('quiz');
    if (localQuiz === null) {
      this.questions = [];
    } else {
      var quiz = JSON.parse(localQuiz);
      this.questions = quiz.questions;
      this.quizTitle = quiz.title;
      this.originalAnswers = quiz.answers;
    }
    // console.log(this.questions);
    // console.log(this.givenAnswers);
    // console.log(this.quizTitle);
    // console.log(this.originalAnswer);

    this.totalMarks = this.originalAnswers.length * 10;
    for (let index = 0; index < this.givenAnswers.length; index++) {
      if (this.givenAnswers[index] === this.originalAnswers[index]) {
        this.scoredMarks += 10;
      }
    }
    console.log(this.totalMarks);
    console.log(this.scoredMarks);
    if (this.scoredMarks >= this.totalMarks / 2) {
      this.isPassed = true;
    }
  }
  ngOnDestroy(): void {
    var savedResults = localStorage.getItem('savedResults');
    var results: Result[] = [];
    var result: Result = {
      user: this.user,
      quiz: this.quizTitle,
      scoredMarks: this.scoredMarks,
      totalMarks: this.totalMarks,
      isPassed: this.isPassed,
    };
    if (savedResults === null) {
      results = [];
    } else {
      results = JSON.parse(savedResults);
    }
    results.push(result);
    localStorage.setItem('savedResults', JSON.stringify(results));
    localStorage.removeItem('quiz');
    localStorage.removeItem('givenAnswers');
    localStorage.removeItem('user');
  }

  ngOnInit(): void {}
}
