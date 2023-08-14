import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/shared/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public showPassword: boolean = false;
  userLoggedInFlag:any;
  constructor(
    private router: Router,
    public commonService: CommonService
  ) {

  }

  ngOnInit() {

  }

  public togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  loginUser() {
    this.commonService.userLoggedIn(true);
    this.router.navigate(['/dashboard']);

    if(this.router.url.indexOf('/login') > -1 && this.router.url.indexOf('/dashboard') > -1){
      this.userLoggedInFlag = false;
    } else {
      this.userLoggedInFlag = true;
    }
  }

}
