import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

    constructor(private auth: AuthService, private router: Router) {}

  logout() {
    this.auth.logout({ logoutParams: { returnTo: document.location.origin } });  // Log out of the application
  }

}
