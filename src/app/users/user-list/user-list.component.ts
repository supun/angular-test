import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/service/user/user.service';
import { User } from 'src/app/shared/model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users : User[];
 
  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((result)=>{
      this.users = result;
  });
     
  }

}
