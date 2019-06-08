import { Component} from '@angular/core';
import { StoragedataService } from './../shared/storagedata.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor(private datastorageservice: StoragedataService) { }
  onstoragedata(){
    this.datastorageservice.storagedata()
    .subscribe(res =>{
      console.log(res);
    })
  }
  onfetchdata(){
    this.datastorageservice.fetchdata();
  }
}
