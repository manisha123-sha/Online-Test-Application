import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Question } from '../questions';
import { User } from '../user';

@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.css'],
})
export class TakeQuizComponent implements OnInit {
  questions: Question[] = [];
  quizTitle: string = '';
  noOfQuestions: number = 0;
  user: User = {
    username: '',
    email: '',
  };
  givenAnswers: number[] = [];
  // isReviewed: boolean = false;
  constructor(private _snack: MatSnackBar, private _router: Router) {
    var localAnswers = localStorage.getItem('givenAnswers');
    if (localAnswers === null) {
      this.givenAnswers = this.givenAnswers;
      console.log(this.user);
      for (var i = 0; i < this.questions.length; i++) {
        this.givenAnswers[i] = -1;
      }
    } else {
      this.givenAnswers = JSON.parse(localAnswers);
    }

    var localQuiz = localStorage.getItem('quiz');
    if (localQuiz === null) {
      this.questions = [];
    } else {
      this.questions = JSON.parse(localQuiz).questions;
      this.quizTitle = JSON.parse(localQuiz).title;
    }
    console.log(this.questions);
    this.noOfQuestions = this.questions.length;
    var localuser = localStorage.getItem('user');
    if (localuser === null) {
      this.user = this.user;
    } else {
      this.user = JSON.parse(localuser);
    }
  }

  ngOnInit(): void {}
  onCheck(question: Question, option: any) {
    console.log(question);
    console.log(option);
    this.givenAnswers[question.sno - 1] = option.sno;
    console.log(this.givenAnswers);
  }

  onSubmit() {
    for (let index = 0; index < this.givenAnswers.length; index++) {
      if (this.givenAnswers[index] === -1) {
        this._snack.open('All Questions are mandatory', 'Ok');
        return;
      }
    }
    localStorage.setItem('givenAnswers', JSON.stringify(this.givenAnswers));
    this._router.navigate(['/review']);
  }
}
