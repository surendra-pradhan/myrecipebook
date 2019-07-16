import { Component} from '@angular/core';
import { StoragedataService } from '../../shared/storagedata.service';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent{

  constructor(private datastorageservice: StoragedataService, private authservice: AuthService) { }
  onstoragedata(){
    this.datastorageservice.storagedata()
    .subscribe(res =>{
      console.log(res);
    })
  }
  onfetchdata(){
    this.datastorageservice.fetchdata();
  }
  logout(){
    this.authservice.signout();
  }
}
