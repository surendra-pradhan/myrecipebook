import { Injectable } from '@angular/core';
import { Recipeservice } from '../recipes/recipe.service';
import { Http } from '@angular/http';
import { from } from 'rxjs';
import 'rxjs/Rx';
import { ingrediant } from './ingrediant.model';
import { AuthService } from './../auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class StoragedataService {

  constructor(private http: Http, private recipeservice: Recipeservice, private authservice: AuthService) { }

storagedata(){
  const token = this.authservice.gettokens();
  return this.http.put('https://recipebook-b80a7.firebaseio.com/recipe.json?auth=' + token, this.recipeservice.getrecipe())
}  
fetchdata(){
  const token = this.authservice.gettokens();
  this.http.get('https://recipebook-b80a7.firebaseio.com/recipe.json?auth=' + token)
   .map(response =>{
    const recipes = response.json();
     for (let recipe of recipes){
       if(!recipe['ingrediants']){
        recipe['ingrediants'] = [];
       }
     }
    return recipes;
   })
  .subscribe(recipe =>{
    this.recipeservice.fetchrecipe(recipe);
  })
}
}
