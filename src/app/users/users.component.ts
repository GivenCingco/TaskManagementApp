import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
// import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private authService: AuthService){
    this.loadUser();
  }

  users:any;
  // displayedColumns: string[] = ['username', 'name', 'email', 'role','status', 'action'];
  dataSource:any;
  

  loadUser(){
    this.authService.getUsers().subscribe(res => {
      this.users = res;
      // this.dataSource =  new MatTableDataSource(this.users);
    })
  }
  
  updateUser(code:any){

  }
}
