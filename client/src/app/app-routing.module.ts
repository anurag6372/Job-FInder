import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RRegisterComponent } from './Components/r-register/r-register.component';
import { JSRegisterComponent } from './Components/js-register/js-register.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { JobDetailComponent } from './Components/job-detail/job-detail.component';
import { RloginComponent } from './Components/rlogin/rlogin.component';
import { AddjobComponent } from './Components/addjob/addjob.component';
import { JobListComponent } from './Components/job-list/job-list.component';
import { JSProfileComponent } from './Components/jsprofile/jsprofile.component';
import { RProfileComponent } from './Components/rprofile/rprofile.component';
import { ProfileComponent } from './Components/profile/profile.component';

const routes: Routes = [
  { path: "",component: HomeComponent},
  { path: "l", component: LoginComponent },
  { path: "rr", component: RRegisterComponent },
  { path: "jsr", component: JSRegisterComponent },
  { path: "jobDetail", component: JobDetailComponent},
  { path: "rlogin", component: RloginComponent},
  { path: "addjob", component: AddjobComponent},
  { path: "jobList", component: JobListComponent},
  { path: "jsProfile", component: ProfileComponent},
  { path: "rProfile", component: ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
