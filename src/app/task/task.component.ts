import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { UpdatepopupComponent } from '../updatepopup/updatepopup.component';
import { FormBuilder,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router} from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  tasks: any;
  constructor(
    private builder: FormBuilder, 
    private toastr: ToastrService,
    private authService: AuthService,
    private router: Router
    ){
      this.loadTasks();

  }

 // Task Form
 taskForm = this.builder.group({
  id:this.builder.control('', Validators.compose([Validators.required,Validators.minLength(5)])),
  userId:this.builder.control('', Validators.compose([Validators.required,Validators.minLength(5)])),
  name:this.builder.control('',Validators.required),
  description:this.builder.control('',Validators.required),
  
});

//Add Task
taskAdding(){
  if (this.taskForm.valid){
    this.authService.registration(this.taskForm.value).subscribe( res => {
      this.toastr.success('Task successfully added!');
      this.router.navigate(['']);
    });
  } else {
    this.toastr.warning('Please enter valid data')
  }
}



  loadTasks(){
    this.authService.getTasks().subscribe(res => {
      this.tasks = res;
    })
  }

  deleteTask(code:any){
    this.authService.deleteTask(code).subscribe((res) => {
      this.toastr.success('User deleted successfully');
      setTimeout(() => {
        location.reload()
      }, 2000);
    })
   }
  
   updateTask(code:any){
    this.router.navigate([`/update/${code}`]);
   }
  


}
