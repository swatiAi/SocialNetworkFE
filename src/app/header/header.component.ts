import { Component } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private http: HttpClient
  ) {}
  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  showGraph() {
    //username = this.loginService.username;
    this.http.get(`http://localhost:8080/display_friends_network?username=${this.loginService.username.toString()}`).subscribe();
    //http://127.0.0.1:8080/display_friends_network?user=swati123
  }
}
