import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/shared/shared.module';

const routes:Routes = [{
  path: '',
  component: DashboardComponent
}];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
