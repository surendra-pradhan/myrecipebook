import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdownlist]'
})
export class DropdownlistDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggelclass(){
    this.isOpen = !this.isOpen;
  }
  constructor() { 
   
  }

}
