import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from '../questions';
import { User } from '../user';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'],
})
export class ReviewComponent implements OnInit {
  questions: Question[] = [];
  quizTitle: string = '';
  user: User = {
    username: '',
    email: '',
  };

  givenAnswers: number[] = [];

  constructor(private _router: Router) {
    var localAnswers = localStorage.getItem('givenAnswers');
    if (localAnswers === null) {
      this.givenAnswers = [];
    } else {
      this.givenAnswers = JSON.parse(localAnswers);
    }

    console.log('Inside Review');
    console.log(this.givenAnswers);
    var localQuiz = localStorage.getItem('quiz');
    if (localQuiz === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localQuiz).questions;
      this.quizTitle = JSON.parse(localQuiz).title;
    }
    console.log(this.questions);
  }

  ngOnInit(): void {}

  back() {
    this._router.navigate(['/quiz']);
  }
  submit() {
    this._router.navigate(['/result']);
  }
}
