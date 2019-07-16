import { NgModule } from '@angular/core';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
const authrouting: Routes = [
    {path:"signin", component:SigninComponent},
    {path:'signup', component:SignupComponent}
]
@NgModule({
imports:[RouterModule.forChild(authrouting)],
exports:[RouterModule]
})
export class authroutingModule{

}