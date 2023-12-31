import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/shared/shared.module';

const routes:Routes = [{
  path: '', 
  component: LoginComponent
}];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports:[LoginComponent]
})
export class LoginModule { }
