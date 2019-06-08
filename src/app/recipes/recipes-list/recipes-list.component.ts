import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';
import { Recipeservice } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
recipe :Recipes[];

  constructor(private RecipeService: Recipeservice, private route: Router, private router: ActivatedRoute) { 
       
  }
  ngOnInit() {
    this.RecipeService.changerecipe
    .subscribe(recipes=>{
      this.recipe = recipes;
      console.log(this.recipe)
    })
    this.recipe = this.RecipeService.getrecipe()
  }
  addnewRecipe(){
        this.route.navigate(['new'], {relativeTo: this.router})
  }
 

}
