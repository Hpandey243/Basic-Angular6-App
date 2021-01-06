import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public id:String;
  public user:User;
  public  fetched=0;
  public message;
  public newFlag:boolean;

  ngOnInit() {
  }
 
  
  constructor(private userService: UserServiceService) { }

  
  fetchUser(){
  
    this.userService.getUser(this.id)
    .subscribe(
      data => {
      console.log(data);
       this.user=data;
      this.fetched=1;
    },
    error => console.log('ERROR: ' + error));
 

}
deleteUser(){
  this.userService.deleteUser(this.id) 
  .subscribe(
    data => {
      console.log(data);
      this.message=data;
      this.fetched=1;
    },
    error => console.log('ERROR: ' + error));
}




}