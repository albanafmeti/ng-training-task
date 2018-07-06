import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {

  constructor(private http: Http) { }

  getUsers(): Promise<any> {
    return this.http.get('/assets/data/users.data.json').toPromise()
      .then(response => response.json())
      .catch(error => console.log(error));
  }
}
