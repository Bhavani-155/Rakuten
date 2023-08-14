import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { SharedModule } from 'src/shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HorizontalMenuComponent } from './menu/horizontal-menu/horizontal-menu.component';
import { VerticalMenuComponent } from './menu/vertical-menu/vertical-menu.component';
import { SidenavComponent } from './menu/sidenav/sidenav.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HorizontalMenuComponent,
    VerticalMenuComponent,
    SidenavComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenuModule,
    SharedModule,
    DashboardModule
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
