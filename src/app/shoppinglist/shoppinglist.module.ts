import { NgModule } from '@angular/core';
import { ShoppinglistComponent } from './shoppinglist.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[   
        ShoppinglistComponent,
        ShoppingEditComponent,],
    imports:[
        CommonModule,
        FormsModule,
    ],
    exports:[
        FormsModule 
    ]
})
export class shoppinglistmodule{}