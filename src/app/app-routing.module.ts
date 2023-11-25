import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';
import { LoginComponent } from './login/login.component';
import { AuthguardService } from './authguard.service';
import { FriendprofileComponent } from './friendprofile/friendprofile.component';

const routes: Routes = [
  {
    path: 'friendprofile',
    component: FriendprofileComponent,
    canActivate: [AuthguardService],
  },
  {
    path: 'viewprofile',
    component: ViewprofileComponent,
    canActivate: [AuthguardService],
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
