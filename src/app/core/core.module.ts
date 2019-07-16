import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ShoppingListService } from '../shoppinglist/shoppinglist.service';
import { Recipeservice } from '../recipes/recipe.service';
import { StoragedataService } from '../shared/storagedata.service';
import { AuthService } from '../auth/auth.service';
import { ApproutingModule } from './../approuting.module';
import { sharedModules } from '../shared/shared.module';
@NgModule({
    declarations:[
        HeaderComponent,
        HomeComponent
    ],
    imports:[
        ApproutingModule,
        sharedModules,  
    ],
    providers:[
        ShoppingListService,
        Recipeservice,
        StoragedataService,
        AuthService,   
    ],
    exports:[ApproutingModule,
    HeaderComponent]
})
export class coreModule{

}