import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { CommonService } from 'src/shared/shared.service';
import { SharedModule } from 'src/shared/shared.module';

const routes:Routes = [{
  path:"", component:HomeComponent
}];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  providers: [CommonService],
  exports: [HomeComponent]
})
export class HomeModule { }
