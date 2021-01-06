import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  
  public nUser:User;
  public  fetched=0;
  public message;
  public newFlag:boolean;

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }
  
  newUser(){
    this.newFlag=true;
  }
  createUser(){
    this.userService.createUser(this.nUser) 
    .subscribe(
      data => {
        console.log(data);
        this.message=data;
        this.fetched=1;
      },
      error => console.log('ERROR: ' + error));
  }

  }

