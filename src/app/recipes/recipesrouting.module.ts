import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { AuthgaurdService } from '../auth/authgaurd.service';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { CommonModule } from '@angular/common';

const reciperouting: Routes = [

    {path:'', component: RecipesComponent, children:[
        {path:'', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent, canActivate:[AuthgaurdService]},
        {path:':id', component: RecipeDetailsComponent},
        {path:':id/edit', component: RecipeEditComponent, canActivate:[AuthgaurdService]}
    ]}
]
@NgModule({
imports:[
    CommonModule,
    RouterModule.forChild(reciperouting)
],
providers:[AuthgaurdService],
exports:[RouterModule]
})

export class recipesroutingmodule{}