import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.css'],
})
export class UserSignupComponent implements OnInit {
  user: User = {
    username: '',
    email: '',
  };

  constructor(private _snackBar: MatSnackBar, private _router: Router) {}

  ngOnInit(): void {}
  login() {
    if (this.user.username.trim() === '' || this.user.username === null) {
      this._snackBar.open('Username is required', 'OK', {
        duration: 3000,
      });
      return;
    }
    if (this.user.email.trim() === '' || this.user.email === null) {
      this._snackBar.open('E-Mail is required', 'OK', {
        duration: 3000,
      });
      return;
    }
    localStorage.setItem('user', JSON.stringify(this.user));
    this._router.navigate(['/quiz']);
  }
}
