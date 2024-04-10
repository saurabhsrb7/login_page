import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [AuthService]
})
export class RegisterComponent {
  credentials = { username: '', password: '' };

  constructor(private authService: AuthService, private router: Router) { }

  register(){
    this.authService.register(this.credentials).subscribe(
      response => {
        // Handle successful register response
        console.log('register successful', response);
        this.router.navigate(['/dashboard']);
      },
      error => {
        // Handle register error
        console.error('register error', error);
      }
    );
  }
}
