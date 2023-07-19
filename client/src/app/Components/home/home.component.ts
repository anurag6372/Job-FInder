import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  isLoggedIn:any;
  constructor(private _router:Router,private _jobService:JobService){
    this.isLoggedIn=_jobService.isLoggedIn();
    console.log("from home",this.isLoggedIn);
  }
}
