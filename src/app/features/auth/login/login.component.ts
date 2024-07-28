import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup; 

  constructor( private authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: [],
      password: [],
      role: [],

    });
  }
}
