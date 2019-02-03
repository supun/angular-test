import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from 'src/app/shared/service/user/user.service';
import { User } from 'src/app/shared/model/user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  private sub: any;
  user:User;
  id:number;
  constructor(private userService:UserService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub=this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.userService.getUserById(this.id).subscribe((result)=>{
        this.user = result;
      });
   });
  
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
