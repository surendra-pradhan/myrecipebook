import { ingrediant } from '../shared/ingrediant.model';

import { Subject } from 'rxjs/Subject';



export class ShoppingListService{
   private ingrediants: ingrediant[] = [
        new ingrediant('apple', 10),
        new ingrediant('Tomato', 5)
      ]
    changeIngredian = new Subject<ingrediant[]>(); 
    editIngrediant = new Subject(); 



 

    getShoppinglist(){
        return this.ingrediants.slice();
    }  
    addIngrediant(ingrdeiant: ingrediant){
        this.ingrediants.push(ingrdeiant);
        this.changeIngredian.next(this.ingrediants.slice())
    }
    addingrdiantlsit(ingrediant){
        this.ingrediants.push(...ingrediant);
        this.changeIngredian.next(this.ingrediants.slice())
    }
    editshoppinlist(index){
        return this.ingrediants[index];
        
}
    updateshoppinglist(index, newingredian){
        this.ingrediants[index] = newingredian;
        this.changeIngredian.next(this.ingrediants.slice())
    }
 removeshoppinglist(index){
   this.ingrediants.splice(index, 1);
   this.changeIngredian.next(this.ingrediants.slice())
 }

}