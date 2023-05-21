import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  apiURL = 'http://localhost:3000/user';

  //List all users
  getUsers(){
    return  this.http.get(this.apiURL);
  }

  //Get user by code
  getByCode(code:any){
    return  this.http.get(this.apiURL + '/' + code);
  }

  //Register user to Database
  registration(inputdata:any ){
    return this.http.post(this.apiURL, inputdata);
  }

  //Update users details
  updateUser(code:any,inputdata:any){
    return this.http.put(this.apiURL + '/' + code, inputdata);

  }

  //Check if user is looged in
  isLoggedIn(){
    return sessionStorage.getItem('username')!= null;
  }

  //Get user role
  getUserRole(){
    return sessionStorage.getItem('userRole')!= null?sessionStorage.getItem('userRole')?.toString():'';
  }


}
 