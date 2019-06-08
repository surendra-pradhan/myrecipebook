import { Recipes } from './recipes.model';
import {  Injectable } from '@angular/core';
import { ingrediant } from '../shared/ingrediant.model';
import { ShoppingListService } from './../shoppinglist/shoppinglist.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class Recipeservice {
changerecipe = new Subject<Recipes[]>();

    recipe :Recipes[] = [
        new Recipes('A test Recipe', 'this is a simple test', 'https://media.defense.gov/2015/Nov/16/2001318253/-1/-1/0/151123-A-YG824-001.JPG',[
            new ingrediant('meat', 1),
            new ingrediant('frenchFrieis', 20)
        ]),
        new Recipes('A test Recipe2', 'this is a simple test2', 'https://www.foodrepublic.com/wp-content/uploads/2012/02/OystersRockefeller.jpg',[
            new ingrediant('buns', 2),
            new ingrediant('meat', 1)
        ])
      ]
constructor(private slservice: ShoppingListService){}
      getrecipe(){
          return this.recipe.slice();
      }
      fetchrecipe(recipes){
         this.recipe = recipes;
         return this.changerecipe.next(this.recipe.slice())
      }
      getRecipes(index){
          return this.recipe[index];
      }

      addingrediantoshoppinglist(ingrediants: ingrediant[]){
          this.slservice.addingrdiantlsit(ingrediants)
      }

      addrecipe(newrecipe){
        this.recipe.push(newrecipe);
        return this.changerecipe.next(this.recipe.slice())
           
      }

      updaterecipe(index, newrecipe){
        this.recipe[index] = newrecipe;
        return this.changerecipe.next(this.recipe.slice())
      }

      deleterecipe(index){
          this.recipe.splice(index, 1);
          return this.changerecipe.next(this.recipe.slice())
      }

}