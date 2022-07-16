import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'l',
    pathMatch: 'full'
  },
  {
    path: 'l',
    component: LoginComponent
  },
  {
    path: 's',
    component: SignupComponent
  },
  {
    path: 'v',
    component: ViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
