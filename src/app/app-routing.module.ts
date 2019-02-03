import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'user-list',
    loadChildren: './users/user-list/user-list.module#UserListModule'
  },
  {
    path: 'user/:id',
    loadChildren: './user/user/user.module#UserModule'
  },
  {
    path: '',
    redirectTo: 'user-list',
    pathMatch: 'full'
  }
];@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
