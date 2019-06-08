import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Recipeservice } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
id:number;
EditMode = false;
recipeForm:FormGroup;
  constructor(private route: ActivatedRoute, private recipeservice: Recipeservice, private router: Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(params=>{
      this.id = params['id']
      this.EditMode = params['id'] != null;
       this.inItform();
    })

  }
private inItform(){
  
  let recipeName = '';
  let recipeimagePath = '';
  let recipeDescription = '';
  let recipeIngrediants = new FormArray([]);
 
  if(this.EditMode){
    const recipe = this.recipeservice.getRecipes(this.id);
    recipeName = recipe.name;
    recipeimagePath = recipe.image;
    recipeDescription = recipe.descpription;
    if(recipe['ingrediants']){
      for(let ingrediant of recipe.ingrediants){
        recipeIngrediants.push(
          new FormGroup({
            'name': new FormControl(ingrediant.name),
            'number': new FormControl(ingrediant.number)
          })
        )
      }
    }
  }

  this.recipeForm = new FormGroup({
    'name': new FormControl(recipeName),
    'image': new FormControl(recipeimagePath),
    'descpription': new FormControl(recipeDescription),
    'ingrediants': recipeIngrediants
  })
}
Onsubmit(){

  if(this.EditMode){
    this.recipeservice.updaterecipe(this.id, this.recipeForm.value);
  } else {
    this.recipeservice.addrecipe(this.recipeForm.value);
  }
}

OnAdd(){
    (<FormArray>this.recipeForm.get('ingrediants')).push(
      new FormGroup({
      'name' : new FormControl(),
      'number': new FormControl()
      })
    )
}
Oncancel(){
   this.router.navigate(['../../'], {relativeTo: this.route})
}
deleteingrdinats(index){
  (<FormArray>this.recipeForm.get('ingrediants')).removeAt(index);
}
}
