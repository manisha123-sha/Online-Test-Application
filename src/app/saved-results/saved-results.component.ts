import { Component, OnInit } from '@angular/core';
import { Result } from '../result';

@Component({
  selector: 'app-saved-results',
  templateUrl: './saved-results.component.html',
  styleUrls: ['./saved-results.component.css'],
})
export class SavedResultsComponent implements OnInit {
  results: Result[] = [
    {
      quiz: 'Oops Concept',
      user: {
        username: 'Manisha',
        email: 'manishavarade11@gmail.com',
      },
      isPassed: true,
      scoredMarks: 30,
      totalMarks: 50,
    },
  ];

  constructor() {
    var localresults = localStorage.getItem('savedResults');
    if (localresults !== null) {
      this.results = JSON.parse(localresults);
    }
  }

  ngOnInit(): void {}
}
