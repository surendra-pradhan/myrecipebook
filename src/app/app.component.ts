import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 loadedFeature ='recipes';

 Onnavigate(featured){
   this.loadedFeature = featured;
 }
 ngOnInit(){
   firebase.initializeApp({
    apiKey: "AIzaSyDpDOPcKoKvwRZmKNkF-B6EjBNw1YM-AMg",
    authDomain: "recipebook-b80a7.firebaseapp.com",
   })
 }
}
