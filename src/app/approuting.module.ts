
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ShoppinglistComponent } from './shoppinglist/shoppinglist.component';
import { HomeComponent } from './core/home/home.component';


const Approute: Routes = [  
    {path: '', redirectTo:'/home', pathMatch:'full'},
    {path: 'home', component: HomeComponent},
    {path:'recipes', loadChildren:'./recipes/recipes.module#recipesModule'},
    {path: 'shopping-list', component: ShoppinglistComponent },
]
@NgModule({
imports:[RouterModule.forRoot(Approute,  { preloadingStrategy: PreloadAllModules })],
exports:[RouterModule]
})
export class ApproutingModule{}