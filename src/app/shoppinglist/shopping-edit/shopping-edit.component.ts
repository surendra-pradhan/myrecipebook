import { Component, OnInit, ViewChild} from '@angular/core';
import { ingrediant } from 'src/app/shared/ingrediant.model';
import { ShoppingListService } from './../shoppinglist.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('f')formvalue:NgForm;
editingrediants;
editmode=false;
index:number;
  constructor(private slservice: ShoppingListService) { }

  ngOnInit() {
    this.slservice.editIngrediant
    .subscribe(ind =>{
      this.index = +ind;
      this.editmode = true;
      this.editingrediants = this.slservice.editshoppinlist(this.index);
      this.formvalue.setValue({
        itemname: this.editingrediants.name,
        itemamount: this.editingrediants.number
      })
    })
  }
  Additem(form:NgForm){
    const value = form.value;
    const newIngrediant = new ingrediant(value.itemname, value.itemamount);
    if(this.editmode){
      this.slservice.updateshoppinglist(this.index, newIngrediant)
    }else{
      this.slservice.addIngrediant(newIngrediant);
    }
    this.editmode = false;
    form.reset();
  }
  onClear(){
    this.formvalue.reset(); 
    this.editmode = false;
  }
  onRemove(){
    if(this.editmode){
      this.slservice.removeshoppinglist(this.index);
      this.editmode = false;
      this.formvalue.reset();
    }
  }
}
