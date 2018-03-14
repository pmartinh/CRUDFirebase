import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFirestoreModule} from 'angularfire2/firestore';

var config = {
  apiKey: "AIzaSyCkh0TDLcUY4XIvQnVtfSUkQw_jtoSN14E",
  authDomain: "angulartesting-d8378.firebaseapp.com",
  databaseURL: "https://angulartesting-d8378.firebaseio.com",
  projectId: "angulartesting-d8378",
  storageBucket: "angulartesting-d8378.appspot.com",
  messagingSenderId: "709181931225"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AngularFireModule, AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
