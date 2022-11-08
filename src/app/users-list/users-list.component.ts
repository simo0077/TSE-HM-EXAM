import { Component, OnInit } from '@angular/core';
import users from "../Json files/users.json";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  UserList:{first_name : string, last_name : string, phone_number: string, address: string, email: string;}[]= users
}
