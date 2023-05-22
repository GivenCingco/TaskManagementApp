import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../services/auth.service';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-updatepopup',
  templateUrl: './updatepopup.component.html',
  styleUrls: ['./updatepopup.component.css'] 
})
export class UpdatepopupComponent implements OnInit{
  FormData!: FormGroup;
  isLoading!: boolean;
  user!:any;
  code!:any;

  constructor(
    private builder: FormBuilder, 
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute

    ){}
  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      this.code = params.get('code');
      this.authService.getByCode(this.code).subscribe((res) => {
      this.user = res;
      this.FormData.patchValue(this.updateFormValues())
      })
    })

    this.FormData = this.builder.group({
      id: new FormControl(''),
      username: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      contact: new FormControl(''),
      password: new FormControl(''),
    })

  }


  onSubmit(formData:any){
    this.authService.updateUser(this.code, formData).subscribe(res => {
    this.toastr.success('Updated successfully')
  
    setTimeout(() => {
       location.href = '/';
    }, 2000);
    })
  }

updateFormValues(){
  return {
    id:this.user.id,
    username: this.user.username,
    name: this.user.name,
    email: this.user.email,
    contact: this.user.contact,
    password: this.user.password,
  }
}


updateUser(){}
}
