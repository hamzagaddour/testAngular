import { UserListComponent } from './user/user-list/user-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { AuthGuard } from 'src/app/shared/auth.guard';

const routes : Routes = [
  {path:"", component: UserListComponent, resolve: [AuthGuard]},
  {path : ":id/edit",component:UserEditComponent},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersRoutingModule { }
