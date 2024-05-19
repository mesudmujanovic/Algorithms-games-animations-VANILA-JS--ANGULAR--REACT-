import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JumpGameModuleModule } from './jump-game-module/jump-game-module.module';

@NgModule({
  declarations: [
    AppComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JumpGameModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
