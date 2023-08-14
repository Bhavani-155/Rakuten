import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';

/*const routes: Routes = [
  {
    path: '',
    component: LayoutComponent, children: [
      {
        path: '', loadChildren:() => import('./home/home.module').then(m=> m.HomeModule)
      }, 
      {
        path: 'login', loadChildren:() => import('./login/login.module').then(m=> m.LoginModule)
      },
      {
        path: 'dashboard', loadChildren:() => import('./dashboard/dashboard.module').then(m=> m.DashboardModule)
        //path: 'dashboard',
        //component: DashboardComponent
      }
    ]
  },
  { path: '', redirectTo: '', pathMatch: 'full'}
  
];*/

const routes: Routes = [
  
   
      {
        path: '', loadChildren:() => import('./home/home.module').then(m=> m.HomeModule)
      }, 
      {
        path: 'login', loadChildren:() => import('./login/login.module').then(m=> m.LoginModule)
      },
      {
        path: 'dashboard', loadChildren:() => import('./dashboard/dashboard.module').then(m=> m.DashboardModule)
      },
      { path: '', redirectTo: 'user', pathMatch: 'full'}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
