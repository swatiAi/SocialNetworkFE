import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public username: any;
  public password: any;
  public loginusername:any;
  public name: string | undefined;

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackBar: MatSnackBar,
    private LoginService:LoginService
  ) {}

  ngOnInit(): void {
    this.username = '';
    this.password = '';
  }

  login(): void {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    this.http
      .post(
        'http://127.0.0.1:8080/login',
        JSON.stringify({ username: this.username, password: this.password }),
        httpOptions
      )
      .subscribe(
        (response) => {
          console.log(response);
          this.router.navigate(['/viewprofile', { username: this.username }]);
          this.loginauth()
        },
        (error) => {
          this.snackBar.open(error.error.message, 'Dismiss', {
            duration: 5000,
          });
        }
      );
  }
  signup() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    this.http
      .post(
        'http://127.0.0.1:8080/add_user',
        JSON.stringify({ username: this.username, password: this.password}),
        httpOptions
      )
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    this.router.navigate(['/signup']);
  }
  loginauth() {
    this.LoginService.login(this.username);
    this.router.navigate(['/viewprofile', { username: this.username }]);
    }

    logout() {
    this.LoginService.logout();
    this.router.navigate(['/login']);
    }
    // openSignupForm() {
    //   const dialogRef = this.dialog.open(SignupComponent, {
    //     width: '250px',
    //     data: { username: this.username, password: this.password}
    //   });
    //   dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   });
    // }

}
