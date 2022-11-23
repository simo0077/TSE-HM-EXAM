import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "./Entities/Users";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = 'assets/users.json';
  getUser(){
    return this.http.get<User[]>(this.userUrl)
  }

  constructor(private http: HttpClient) { }
}
