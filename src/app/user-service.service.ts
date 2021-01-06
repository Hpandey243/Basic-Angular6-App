import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { Observable } from '../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

private baseUrl="http://localhost:8081/user";

constructor(private http : HttpClient) { }

  getUser(id:String) :Observable<User>{
    return this.http.get<User>(this.baseUrl+"/getUser/"+id);
 
  }

  userLogin(user: Object): Observable<Object> {
    return this.http.post(this.baseUrl + "/userLogin", user, { responseType: 'text' });
  }
  createUser(user: User): Observable<Object> {
    return this.http.post(this.baseUrl + "/saveUser", user, { responseType: 'text' });
  }

  updateUser(user: Object): Observable<Object> {
    return this.http.post(this.baseUrl + "/updateUser", user, { responseType: 'text' });
  }

  deleteUser(id: String): Observable<any> { 
    return this.http.delete(this.baseUrl+"/deleteUser/"+id, { responseType: 'text' });
  }
}   



