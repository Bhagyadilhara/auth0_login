import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: any;
  password: any;
  rememberMe: any;

  onSubmit() 
  {
    //throw new Error('Method not implemented.');
  }

}
