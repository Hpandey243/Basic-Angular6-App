import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loggingUser:User;
  public   message;
  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }
  
  loginUser(){
    this.userService.userLogin(this.loggingUser) 
    .subscribe(
      data => {
        console.log(data);
        this.message=data;
        
      },
      error => console.log('ERROR: ' + error));
  }

}
