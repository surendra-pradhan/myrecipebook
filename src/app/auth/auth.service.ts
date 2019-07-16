import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
token;
  constructor(private router: Router) { }

  signup(email:string, password:string){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(error =>{
          console.log(error);
        })
  }
signin(email:string, password:string){
  
firebase.auth().signInWithEmailAndPassword(email, password)
  .then(
    res =>{
      this.router.navigate(['/']);
     firebase.auth().currentUser.getIdToken()
     .then(tokens =>{
       this.token = tokens;
     })
    }
  ).catch(error=>{
    console.log(error);
  })
}
signout(){
  firebase.auth().signOut();
  this.token = null;
  
}
gettokens(){
   firebase.auth().currentUser.getIdToken()
   .then(tokens =>{
    this.token = tokens;
  })
  return this.token;
}

authentication(){
  return this.token != null;
}

}
