import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css'],
})
export class QuizzesComponent implements OnInit {
  constructor(private _router: Router) {}

  quizzes: Quiz[] = [
    {
      id: 1,
      title: 'Oops Concept',
      desc: 'An ultimate quiz to check your Oops Concept Knowldege',
      questions: [
        {
          sno: 1,
          question: ' Which of the following language was developed as the first purely object programming language?',
          options: [
            { sno: 1, value: 'SmallTalk' },
            { sno: 2, value: 'C++' },
            { sno: 3, value: 'Kotlin' },
            { sno: 4, value: 'Java' },
          ],
        },
        {
          sno: 2,
          question:
            ' Who developed object Oriented Programming?',
          options: [
            { sno: 1, value: 'Adele Goldberg' },
            { sno: 2, value: 'Dennis Ritchie' },
            { sno: 3, value: 'Alan Kay' },
            { sno: 4, value: 'Andrea Ferro' },
          ],
        },
        {
          sno: 3,
          question:
            'Which of the following is not an OOPS concept?',
          options: [
            { sno: 1, value: 'Encapsulation' },
            { sno: 2, value: 'Polymorphism' },
            { sno: 3, value: 'Exception' },
            { sno: 4, value: 'Abstraction' },
          ],
        },
        {
          sno: 4,
          question:
            'Which feature of OOPS described the reusability of code?',
          options: [
            { sno: 1, value: 'Abstraction' },
            { sno: 2, value: 'Encapsulation' },
            { sno: 3, value: 'Polymorphism' },
            { sno: 4, value: 'Inheritance' },
          ],
        },
        {
          sno: 5,
          question: 'Which of the following language supports polymorphism but not the classes?',
          options: [
            { sno: 1, value: 'C++ programming language' },
            { sno: 2, value: 'Java programming language' },
            { sno: 3, value: 'Ada programming language' },
            { sno: 4, value: 'C# programming language' },
          ],
        },
      ],
      answers: [1, 3, 3, 4, 3],
    },
    // QUIZ 2
    {
      id: 2,
      title: 'SQL',
      desc: 'An ultimate quiz to check your SQL Knowldege',
      questions: [
        {
          sno: 1,
          question: 'What is the full form of SQL?',
          options: [
            { sno: 1, value: '<Structured Query List' },
            { sno: 2, value: 'Structure Query Language' },
            { sno: 3, value: 'Sample Query Language' },
            { sno: 4, value: 'None of these.' },
          ],
        },
        {
          sno: 2,
          question:
            'Which of the following is not a valid SQL type"?',
          options: [
            { sno: 1, value: 'FLOAT' },
            { sno: 2, value: 'NUMERIC' },
            { sno: 3, value: 'DECIMAL' },
            { sno: 4, value: 'CHARACTER' },
          ],
        },
        {
          sno: 3,
          question: 'Which of the following is not a DDL command?',
          options: [
            { sno: 1, value: 'TRUNCATE' },
            { sno: 2, value: 'ALTER' },
            { sno: 3, value: 'CREATE' },
            { sno: 4, value: 'UPDATE' },
          ],
        },
        {
          sno: 4,
          question: 'Which of the following are TCL commands?',
          options: [
            { sno: 1, value: 'COMMIT and ROLLBACK' },
            { sno: 2, value: 'UPDATE and TRUNCATE' },
            { sno: 3, value: 'SELECT and INSERT' },
            { sno: 4, value: 'GRANT and REVOKE' },
          ],
        },
        {
          sno: 5,
          question:
            ' Which statement is used to delete all rows in a table without having the action logged?',
          options: [
            { sno: 1, value: 'DELETE' },
            { sno: 2, value: 'REMOVE' },
            { sno: 3, value: 'DROP' },
            { sno: 4, value: 'TRUNCATE' },
          ],
        },
        {
          sno: 6,
          question: 'SQL Views are also known as?',
          options: [
            { sno: 1, value: 'Simple tables' },
            { sno: 2, value: 'Virtual tables' },
            { sno: 3, value: 'Complex tables' },
            { sno: 4, value: 'Actual Tables' },
          ],
        },
      ],
      answers: [2, 3, 4, 1, 4, 2],
    },
  ];

  ngOnInit(): void {}

  onClick(q: Quiz) {
    localStorage.setItem('quiz', JSON.stringify(q));
    console.log(q);
    this._router.navigate(['/register']);
  }
}
