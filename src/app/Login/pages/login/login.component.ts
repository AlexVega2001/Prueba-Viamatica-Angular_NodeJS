import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../../interfaces/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formLogin: FormGroup;
  showPassword: boolean = false;
  ResponseMessage: string = '';
  showAlert: boolean = false;

  constructor(private router: Router, 
    private serviceLogin: LoginService,
    private fb: FormBuilder) {
      this.formLogin = this.fb.group({
        userOrEmail: ['', Validators.required],
        password: ['', Validators.required]
      })
  }

  login() {
    const user = this.formLogin.value.userOrEmail;
    const pass = this.formLogin.value.password;

    this.serviceLogin.loguearUsuario(user.trimStart().trimEnd(), pass.trimStart().trimEnd()).subscribe(
      (response: Login) => {
        if (response.success) { // Ajusta según la estructura de tu respuesta
          this.router.navigate(['/home']);
        } else {
          this.displayMessage(response.message);
        }
      },
      error => {
        this.displayMessage('Error: ' + error);
      }
    );
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  displayMessage(message: string) {
    this.ResponseMessage = message;
    this.showAlert = true;
    setTimeout(() => {
      this.showAlert = false;
    }, 2000); // 2 segundos
  }
}
