import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RRegisterComponent } from './Components/r-register/r-register.component';
import { JSRegisterComponent } from './Components/js-register/js-register.component';
import { LoginComponent } from './Components/login/login.component';

const routes: Routes = [
  { path: 'l', component: LoginComponent },
  { path: 'rr', component: RRegisterComponent },
  { path: 'jsr', component: JSRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
