import { NgModule } from '@angular/core';
import { DropdownlistDirective } from './dropdownlist.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations:[ DropdownlistDirective],
    exports:[ 
        CommonModule,
        DropdownlistDirective]
})
export class sharedModules{}