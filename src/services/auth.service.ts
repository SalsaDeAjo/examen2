import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserCredential } from 'firebase/auth'; // Import UserCredential directly

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {}

  // Registro de usuario
  async register(email: string, password: string): Promise<UserCredential> {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  // Inicio de sesión
  async login(email: string, password: string): Promise<UserCredential> {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {
      throw error;
    }
  }

  // Cierre de sesión
  async logout(): Promise<void> {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      throw error;
    }
  }

  // Obtener información del usuario actual
  getCurrentUser() {
    return this.afAuth.user;
  }
}
