import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent }
    ])
  ],
  exports: [RouterModule],
  providers: []
})
export class FabricModule { }