import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { CommonModule } from '@angular/common';
import { InteractiveGameModule } from './interactive-game/interactive-game.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    InteractiveGameModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
