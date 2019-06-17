import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopFoldComponent } from './top-fold/top-fold.component';
import { ConnectComponent } from './connect/connect.component';
import { EditorsPickComponent } from './editors-pick/editors-pick.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopFoldComponent,
    ConnectComponent,
    EditorsPickComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
