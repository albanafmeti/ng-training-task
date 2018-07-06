import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { ApiService } from './api.service';

@Injectable()
export class UserService {

  users = [];

  constructor(private apiService: ApiService) {
    this.apiService.getUsers().then(users => this.users = users);
  }

  /**
   * Get user by email.
   * @param email 
   */
  getUserByEmail(email: String): User {

    const users = this.users.filter(user => {

      return user.email === email;

    });

    if (users.length) {
      return User.fromJson(users[0]);
    }
  }

  /**
   * Get user by ID.
   * @param id 
   */
  getById(id: Number): User {
    const users = this.users.filter(user => {

      return user.id === id;

    });

    if (users.length) {
      return User.fromJson(users[0]);
    }
  }
}
