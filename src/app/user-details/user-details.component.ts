import { Component, OnInit } from '@angular/core';
import {UserService} from "../user.service";
import {ActivatedRoute} from "@angular/router";
import {User} from "../Entities/Users";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userService: UserService,private route: ActivatedRoute ) { }
  id: number = 0;

  user: User = {
    "id" : 0 ,
    "first_name" : "",
    "last_name" : "",
    "phone_number": "",
    "address": "",
    "email": "",

  };
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.getUser()
    console.log(this.id)
  }

  getUser(){
    this.userService.getUserById(this.id).subscribe(users => this.user = users[0]
    )
  }

}
