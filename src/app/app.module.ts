import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FabricComponent } from './fabric/fabric.component';
import { AppComponent } from './app.component';
import { FabricModule } from './fabric/fabric.module';

@NgModule({
  declarations: [
    AppComponent,
    FabricComponent,
  ],
  imports: [
    BrowserModule,
    FabricModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
