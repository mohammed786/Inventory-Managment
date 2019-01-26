import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    RouterModule.forRoot([
      // { path: '', component: HomeComponent },
      { path: '', component: LoginComponent }
    ]),
    FormsModule,
  ],
  exports: [RouterModule],
  providers: []
})
export class FabricModule { }