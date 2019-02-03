import { Component } from '@angular/core';
import { UserService } from './shared/service/user/user.service';
import { User } from './shared/model/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
   
    constructor(private userService: UserService) {
     
    }

}