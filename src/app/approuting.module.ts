
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
const Approute: Routes = [
    {path: '', redirectTo:'/recipes', pathMatch:'full'},
    {path: 'recipes', component: RecipesComponent, children:[
        {path:'', component: RecipeStartComponent},
        {path: 'new', component: RecipeEditComponent},
        {path:':id', component: RecipeDetailsComponent},
        {path:':id/edit', component: RecipeEditComponent}
    ]},
    {path: 'shopping-list', component: ShoppinglistComponent },
    {path:"signin", component:SigninComponent},
    {path:'signup', component:SignupComponent}
]
@NgModule({
imports:[RouterModule.forRoot(Approute)],
exports:[RouterModule]
})
export class ApproutingModule{}