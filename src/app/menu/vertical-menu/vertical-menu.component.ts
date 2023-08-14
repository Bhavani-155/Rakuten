import { Component } from '@angular/core';
import  menuData  from './menu.json';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss']
})
export class VerticalMenuComponent {
  menuItems = menuData;
}
