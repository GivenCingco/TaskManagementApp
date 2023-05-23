import { Component } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  visible:boolean = false;
  changetype:boolean =true;

  viewPass(){
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }


  constructor(
    private router: Router
    ){}

}
