import { Component } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css']
})
export class UpdatepopupComponent {

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
      // firstname:this.builder.control('',Validators.required),
      contact:this.builder.control('',Validators.required),
      password: this.builder.control('', Validators.compose([Validators.required, Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')])),
      email:this.builder.control('',Validators.compose([Validators.required, Validators.email])),
      // gender:this.builder.control('Male'),
      role:this.builder.control(''),
      status:this.builder.control(false),
    });
}
