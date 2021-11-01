import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';

import { QuizzesComponent } from './quizzes/quizzes.component';
import { ResultComponent } from './result/result.component';
import { ReviewComponent } from './review/review.component';
import { SavedResultsComponent } from './saved-results/saved-results.component';
import { TakeQuizComponent } from './take-quiz/take-quiz.component';
import { UserSignupComponent } from './user-signup/user-signup.component';

const routes: Routes = [
  { path: '', component: QuizzesComponent },
  { path: 'about', component: AboutComponent },

  { path: 'register', component: UserSignupComponent },
  {
    path: 'quiz',
    component: TakeQuizComponent,
  },
  {
    path: 'review',
    component: ReviewComponent,
  },
  {
    path: 'result',
    component: ResultComponent,
  },
  {
    path: 'results',
    component: SavedResultsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
