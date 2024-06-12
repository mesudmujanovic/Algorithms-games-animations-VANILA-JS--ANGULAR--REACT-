import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { CommonModule } from '@angular/common';
import { InteractiveGameComponent } from './interactive-game/interactive-game/interactive-game.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InteractiveGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
