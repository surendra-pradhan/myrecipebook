import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

import { FormsModule } from '@angular/forms';
import { authroutingModule } from './authroting.module';

@NgModule({
    declarations:[
    SigninComponent,
    SignupComponent
    ],
    imports:[
    authroutingModule,
    FormsModule]
})
export class authmodule{

}