import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RRegisterComponent } from './Components/r-register/r-register.component';
import { JSRegisterComponent } from './Components/js-register/js-register.component';
import { HomeComponent } from './Components/home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { JobsComponent } from './Components/jobs/jobs.component';
import { JobDetailComponent } from './Components/job-detail/job-detail.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RloginComponent } from './Components/rlogin/rlogin.component';
import { AddjobComponent } from './Components/addjob/addjob.component';
import { JobListComponent } from './Components/job-list/job-list.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RRegisterComponent,
    JSRegisterComponent,
    HomeComponent,
    JobsComponent,
    JobDetailComponent,
    NavbarComponent,
    RloginComponent,
    AddjobComponent,
    JobListComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

    BrowserAnimationsModule,

    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
