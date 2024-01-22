import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async login() {
    try {
      await this.authService.login(this.email, this.password);
      // Redirigir a la página deseada después del inicio de sesión exitoso
      this.router.navigate(['/movements']);
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      // Manejar el error (mostrar un mensaje al usuario, etc.)
    }
  }
}
