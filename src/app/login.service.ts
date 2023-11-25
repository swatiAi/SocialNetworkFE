import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isLoggedIn = false;
  username: any;

  login(username: string) {
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
    this.isLoggedIn = true;
    this.username = username;
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    this.isLoggedIn = false;
    this.username = null;
  }

  isUserLoggedIn() {
    return this.isLoggedIn;
  }

  getUserId() {
    return this.username;
  }
}
