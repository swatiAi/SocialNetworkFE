import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { ApiCallService } from '../api-call.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';


@Component({
  selector: 'app-viewprofile',
  templateUrl: './viewprofile.component.html',
  styleUrls: ['./viewprofile.component.css'],
})

export class ViewprofileComponent implements OnInit {
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

    this.route.params.subscribe(params => {
      this.username = params['username'];
    });

    // Fetch the user data from the API
    this.http
      .get<User>(`http://127.0.0.1:8080/get_user?username=${this.username}`)
      .subscribe(
        (response) => {
          this.user = response;
        },
        (error) => {
          console.log('Error: ' + error);
          console.log('Users: ' + this.user);
        }
      );


  }

  showFriend(friend: any){
    console.log('Friend: ' + friend.username)
    this.router.navigate(['/friendprofile', { username: friend.username}]);
  }
}
