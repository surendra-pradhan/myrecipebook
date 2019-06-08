import { Component, OnInit, OnDestroy } from '@angular/core';
import { ingrediant } from '../shared/ingrediant.model';
import { ShoppingListService } from './shoppinglist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shoppinglist',
  templateUrl: './shoppinglist.component.html',
  styleUrls: ['./shoppinglist.component.css']
})
export class ShoppinglistComponent implements OnInit, OnDestroy {
ingrediants: ingrediant[];
subscription: Subscription;
  constructor(private slService: ShoppingListService) { }
  ngOnInit() {
    this.ingrediants = this.slService.getShoppinglist();
  this.subscription = this.slService.changeIngredian
    .subscribe(ingrediant =>{
      this.ingrediants = ingrediant
    })
  }
ngOnDestroy(){
  this.subscription.unsubscribe();
}
Onedit(index){
  this.slService.editIngrediant.next(index);
}

}
