import { Component, OnInit, Input } from '@angular/core';

import { Recipeservice } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {

  constructor() { }
  ngOnInit() {

  }

}
