import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class CommonService {
  constructor(private router: Router) {

  }
  userLoggedInFlag:boolean = true;
    userLoggedIn(data) {
      this.userLoggedInFlag = data;
      localStorage.setItem('userlog',JSON.stringify(data));
    }

    getUserLogInfo() {
      return localStorage.getItem('userlog');
    }
}