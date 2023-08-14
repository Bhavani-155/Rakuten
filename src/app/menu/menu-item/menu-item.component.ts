import { Component, Input, ViewChild } from '@angular/core';
import { NavItem } from '../nav-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() items: NavItem[];
  @ViewChild('childMenu') public childMenu;
  constructor(public router: Router){}
}
