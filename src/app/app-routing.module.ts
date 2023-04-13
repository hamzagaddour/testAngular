import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AuthGuard } from './shared/auth.guard';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path:"users", loadChildren:()=>import("./component/users/users.module").then(m=>m.UsersModule)},
  {path:"**", redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
