import { NgModule } from '@angular/core';

import { RecipesComponent } from './recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeItemComponent } from './recipes-list/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { recipesroutingmodule } from './recipesrouting.module';
import { sharedModules } from '../shared/shared.module';


@NgModule({
    declarations:[
        RecipesComponent,
        RecipesListComponent,
        RecipeItemComponent,
        RecipeDetailsComponent,
        RecipeStartComponent,
        RecipeEditComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        recipesroutingmodule,
        sharedModules
    ]
})
export class recipesModule{}