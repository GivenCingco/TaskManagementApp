import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
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
    ){}

    // Register Form
    registerForm = this.builder.group({
    id:this.builder.control('', Validators.compose([Validators.required,Validators.minLength(5)])),
    name:this.builder.control('',Validators.required),
    contact:this.builder.control('',Validators.required),
    password: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
    email:this.builder.control('',Validators.compose([Validators.required, Validators.email])),
    role:this.builder.control(''),
    status:this.builder.control(false),
  });

  //Register user
  registration(){
    if (this.registerForm.valid){
      this.authService.registration(this.registerForm.value).subscribe( res => {
        this.toastr.success('Please wait for admin to enable your account','Successfully registered!');
        this.router.navigate(['login']);
      });
    } else {
      this.toastr.warning('Please enter valid data')
    }
  }

}
