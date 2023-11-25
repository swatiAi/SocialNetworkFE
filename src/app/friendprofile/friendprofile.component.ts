import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { ApiCallService } from '../api-call.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friendprofile',
  templateUrl: './friendprofile.component.html',
  styleUrls: ['./friendprofile.component.css'],
})
export class FriendprofileComponent implements OnInit {
  // Declare a variable to hold the user data
  user: any;
  username: any;

  constructor(
    private http: HttpClient,
    private apiService: ApiCallService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.username = params['username'];
      this.callApi(this.username);
    });
  }

  showFriend(friend: User) {
    if (friend.username === localStorage.getItem('username')) {
      this.router.navigate(['/viewprofile', { username: friend.username }], {
        relativeTo: this.route,
        skipLocationChange: true,
        replaceUrl: true,
      });
    } else {
      this.router.navigate(
        ['/friendprofile', { username: friend.username }],
        {
          relativeTo: this.route,
          skipLocationChange: true,
          replaceUrl: true,
        }
      );
      this.callApi(friend.username);
    }
  }

  callApi(username: string) {
    this.http
      .get<User>(`http://127.0.0.1:8080/get_user?username=${username}`)
      .subscribe(
        (response) => {
          this.user = response;
        },
        (error) => {
          console.error('Error: ' + error);
        }
      );
  }

  addFriend() {}
}
