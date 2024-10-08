import { Component, Inject, inject } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APP_CONFIG } from '../../../core/injection-tokens';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup; 

  constructor( 
    public authService: AuthService,
     private fb: FormBuilder,
     @Inject(APP_CONFIG) private appConfig: any
  ) {
    this.loginForm = this.fb.group({
      email: ['test@mail.com', [Validators.required, Validators.email]],
      password: ['123456', [Validators.required]],
    });
  }

  onSubmit() {
    if(this.loginForm.invalid) {
      alert('el formulario no es válido')
    } else { const data = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };
    
    
    this.authService.login(data);
    }
  }


}
