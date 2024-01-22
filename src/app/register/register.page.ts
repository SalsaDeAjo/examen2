import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.page.html',
  styleUrls: ['register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  async register() {
    try {
      await this.authService.register(this.email, this.password);
      // Redirigir a la página deseada después del registro exitoso
      this.router.navigate(['/movements']);
    } catch (error) {
      console.error('Error en el registro:', error);
      // Manejar el error (mostrar un mensaje al usuario, etc.)
    }
  }
}
