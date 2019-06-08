import { Injectable } from '@angular/core';
import { Recipeservice } from '../recipes/recipe.service';
import { Http } from '@angular/http';
import { from } from 'rxjs';
import 'rxjs/Rx';
import { ingrediant } from './ingrediant.model';
@Injectable({
  providedIn: 'root'
})
export class StoragedataService {

  constructor(private http: Http, private recipeservice: Recipeservice) { }

storagedata(){
  return this.http.put('https://recipebook-b80a7.firebaseio.com/recipe.json', this.recipeservice.getrecipe())
}  
fetchdata(){
  this.http.get('https://recipebook-b80a7.firebaseio.com/recipe.json')
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
