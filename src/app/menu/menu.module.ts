import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuRoutingModule } from './menu.routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MenuComponent } from './menu.component';

const routes: Routes = [{
  path: '', component: MenuComponent, pathMatch: 'full'
}
];

@NgModule({
  declarations: [MenuComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatIconModule
  ],
  exports: [MenuComponent]
})
export class MenuModule { }
