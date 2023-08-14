import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/shared/shared.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  userLogged:any;
  menuItems:any;
  hideNav:boolean = true;
  constructor(
    private router: Router,
    public commonService: CommonService
  ) {
   
  }

  ngOnint() {
    alert('1');
    if(this.router.url.indexOf('/login') > -1 && this.router.url.indexOf('/dashboard') > -1){
      this.hideNav = false;
    } else {
      this.hideNav = true;
    }
  }

  login() {
   
  }
}


