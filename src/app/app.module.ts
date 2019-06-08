import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipeItemComponent } from './recipes/recipes-list/recipe-item/recipe-item.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { ShoppingEditComponent } from './shoppinglist/shopping-edit/shopping-edit.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { DropdownlistDirective } from './shared/dropdownlist.directive';
import { ShoppingListService } from './shoppinglist/shoppinglist.service';
import { ApproutingModule } from './approuting.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { Recipeservice } from './recipes/recipe.service';
import { StoragedataService } from './shared/storagedata.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './auth/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    ShoppinglistComponent,
    ShoppingEditComponent,
    RecipeDetailsComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    DropdownlistDirective,
    SigninComponent,
    SignupComponent
  ],
  imports: [

BrowserModule,
  FormsModule,
  ReactiveFormsModule,
    ApproutingModule,
    HttpModule 
  ],
  providers: [ShoppingListService, Recipeservice, StoragedataService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
