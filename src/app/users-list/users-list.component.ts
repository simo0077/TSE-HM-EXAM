import { Component, OnInit } from '@angular/core';




import {User} from "../Entities/Users";
import {UserService} from "../user.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  UserList: User[] = [];
  showUser(){
    this.userservice.getUser()
      .subscribe((data: User[]) => this.UserList = data)

  }

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.showUser();

  }
  log(){
    console.log(this.UserList)
  }


}
