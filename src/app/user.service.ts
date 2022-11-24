import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {User} from "./Entities/Users";
import {map} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  userUrl = 'assets/users.json';
  getUser(){
    return this.http.get<User[]>(this.userUrl)
  }

  getUserById(id: number){
    return this.http.get<User[]>(this.userUrl).pipe(map(users => users.filter(user => user.id == id)));
  }

  constructor(private http: HttpClient) { }
}
