import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome.page.html',
  styleUrls: ['welcome.page.scss'],
})
export class WelcomePage {

  constructor(private router: Router) {}

  goToLogin() {
    // Navegar a la página de login
    this.router.navigate(['/login']);
  }

  goToRegister() {
    // Navegar a la página de registro
    this.router.navigate(['/register']);
  }
}

