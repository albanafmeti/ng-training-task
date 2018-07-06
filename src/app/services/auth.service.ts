import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable()
export class AuthService {

  constructor(private storage: StorageService, private userService: UserService) { }

  /**
   * Authenticate user credentials.
   * @param email 
   * @param password 
   */
  authenticate(email: string, password: string): boolean {
    const user = this.userService.getUserByEmail(email);

    if (user && user.hasPassword(password)) {
      this.save(user);
      return true;
    }

    return false;
  }

  /**
   * Save authentication.
   * @param user 
   */
  save(user: User): void {
    this.storage.storeObject('auth_user', user);
  }

  /**
   * Get authenticated user.
   */
  user(): User {
    const jsonUser = this.storage.getObject('auth_user');
    if (jsonUser) {
      return User.fromJson(jsonUser);
    }
  }

  /**
   * Clear authentication.
   */
  clear(): void {
    this.storage.removeItem('auth_user');
  }

  /**
   * Check if any user is authenticated.
   */
  check(): boolean {
    const auth_user = this.user();
    return !!auth_user;
  }
}