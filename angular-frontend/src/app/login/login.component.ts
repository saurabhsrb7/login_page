import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent {
  credentials = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.credentials).subscribe(
      response => {
        // Handle successful login response
        console.log('Login successful', response);
        this.router.navigate(['/dashboard']);
      },
      error => {
        // Handle login error
        console.error('Login error', error);
      }
    );
  }
}
