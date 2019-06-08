import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';
import { Recipeservice } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
 recipe: Recipes;
 id: number;
  constructor(private recipeservice: Recipeservice, private router: ActivatedRoute,private route:Router) { }

  ngOnInit() {
    this.router.params
    .subscribe(params => {
      this.id = +params['id']
      this.recipe = this.recipeservice.getRecipes(this.id);
    })
  }
  editrecipe(){
       this.route.navigate(['edit'], {relativeTo: this.router})
  }
  addtoshoppinglist(){
    this.recipeservice.addingrediantoshoppinglist(this.recipe.ingrediants)
  }
  deletrecipe(){
    this.recipeservice.deleterecipe(this.id);
    this.route.navigate(['/recipes'])
  }
}
