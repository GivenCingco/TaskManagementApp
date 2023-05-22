import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';
import { FormBuilder,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router} from '@angular/router';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(
    private builder: FormBuilder, 
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
    ){
    this.loadUser();
  }

  users:any;
  dataSource:any;
  

  loadUser(){
    this.authService.getUsers().subscribe(res => {
      this.users = res;
    })
  }
  
  deleteUser(code:any){
    this.authService.deleteUser(code).subscribe((res) => {
      this.toastr.success('User deleted successfully');
      setTimeout(() => {
        location.reload()
      }, 2000);
    })
   }
  
   updateUser(code:any){
    this.router.navigate([`/update/${code}`]);
   }
  

}
