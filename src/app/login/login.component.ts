import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  visible:boolean = false;
  changetype:boolean =true;

  viewPass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

   constructor(
    private builder: FormBuilder, 
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
    ){
      sessionStorage.clear();
    }
    userData:any;

    loginForm = this.builder.group({
      username:this.builder.control('', Validators.required), 
      password:this.builder.control('', Validators.required)
    })

    login(){
      if (this.loginForm.valid){
      this.authService.getByCode(this.loginForm.value.username).subscribe(res => {
      this.userData = res;
      if(this.userData.password === this.loginForm.value.password){
        if(this.userData.status){
          sessionStorage.setItem('username', this.userData.id);
          sessionStorage.setItem('userRole', this.userData.role);
          this.toastr.success('Login successful');
          this.router.navigate(['']);
        } else {
          this.toastr.warning('Please contact administrator', 'In active user');
        }
      } else {
        this.toastr.warning('Invalid credentials');
      }
      });
    }
  }
}
