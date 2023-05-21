import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';
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
  dataSource:any;
  

  loadUser(){
    this.authService.getUsers().subscribe(res => {
      this.users = res;
    })
  }
  
  updateUser(code:any){
    

    
  }

  openPopup(){


  }

}
