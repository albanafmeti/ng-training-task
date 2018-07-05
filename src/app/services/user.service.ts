import { Injectable } from '@angular/core';
import USERS_LIST from '../../data/users.data';
import { User } from '../models/user.model';

@Injectable()
export class UserService {

  constructor() { }

  /**
   * Get user by email.
   * @param email 
   */
  getUserByEmail(email: String): User {

    const users = USERS_LIST.filter(user => {

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
    const users = USERS_LIST.filter(user => {

      return user.id === id;

    });

    if (users.length) {
      return User.fromJson(users[0]);
    }
  }
}
