import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {

  constructor(private _route:Router,private _service:JobService){

  }
onApplyNow() {
  if(this._service.isLoggedIn()){
    this._route.navigate(['/jobDetail'])
  }else{
    this._route.navigate(['/l'])
  }
}

}
