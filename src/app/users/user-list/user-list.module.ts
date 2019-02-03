import { NgModule } from '@angular/core';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule,MatCardModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list.component';
import { UserListRoutingModule } from './user-list-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatCardModule,
    UserListRoutingModule
  ],
  declarations: [UserListComponent]
})
export class UserListModule { }