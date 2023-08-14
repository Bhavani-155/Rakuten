import { Component } from '@angular/core';
import { CommonService } from 'src/shared/shared.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  menuHomeItems:any;
  constructor(
    private router:Router
  ) {

  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.menuHomeItems = [{
          displayName: 'Login',
          iconName: 'close',
          children: []
        }
      ];
    });
  }

  login() {
    this.router.navigate(['/login']);
  }
}
