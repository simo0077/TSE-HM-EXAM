import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  email: string = "";
  message: string = "";
  displayed_email : string = "";
  displayed_message : string = "";

  constructor() {
  }

  ngOnInit(): void {
  }
  submit_form(){
    this.displayed_email = this.email;
    this.displayed_message = this.message;
  }

  clearForm(){
    this.email = "";
    this.message = "";
  }

}
