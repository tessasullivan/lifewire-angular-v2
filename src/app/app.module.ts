import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopFoldComponent } from './top-fold/top-fold.component';
import { ConnectComponent } from './connect/connect.component';
import { EditorsPickComponent } from './editors-pick/editors-pick.component';
import { FooterComponent } from './footer/footer.component';
import { masterFirebaseConfig } from './api-keys';
import { DummyComponent } from './dummy/dummy.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

export const imgSrc = '../../assets/img';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopFoldComponent,
    ConnectComponent,
    EditorsPickComponent,
    FooterComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
