import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { UserEditComponent } from './component/users/user/user-edit/user-edit.component';
import { UserListComponent } from './component/users/user/user-list/user-list.component';
import { FilterPipe } from './shared/filter.pipe';
import { AppColorDirective } from './shared/app-color.directive';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './shared/store';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserEditComponent,
    UserListComponent,
    FilterPipe,
    AppColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(ROOT_REDUCERS)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
