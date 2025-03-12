import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: any;
  password: any;
  rememberMe: any;

  constructor(private auth: AuthService) {}

  onSubmit() 
  {
    console.log('Username: ' + this.username);
    console.log('Password: ' + this.password);
    //throw new Error('Method not implemented.');
    this.auth.loginWithRedirect();  // Redirect to the Auth0 login page
  }

}
