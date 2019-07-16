import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }
  onSignin(form){
    const email = form.value.email;
    const password = form.value.password;
    this.authservice.signin(email, password)
      
    
  }
}
