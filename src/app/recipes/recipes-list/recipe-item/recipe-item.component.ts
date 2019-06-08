import { Component, OnInit, Input } from '@angular/core';
import { Recipes } from '../../recipes.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe: Recipes;
@Input() Index:number;
  constructor() { 
    
  }

  ngOnInit() {
  }

}
