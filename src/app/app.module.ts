import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { AboutComponent } from './about/about.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TakeQuizComponent } from './take-quiz/take-quiz.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReviewComponent } from './review/review.component';
import { ResultComponent } from './result/result.component';
import { SavedResultsComponent } from './saved-results/saved-results.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizzesComponent,
    AboutComponent,

    NavbarComponent,
    TakeQuizComponent,
    UserSignupComponent,
    ReviewComponent,
    ResultComponent,
    SavedResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
