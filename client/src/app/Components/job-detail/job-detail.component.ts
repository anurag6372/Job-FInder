import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent {
  constructor(private _route:Router){}
routeBack() {
  this._route.navigate(['/']);
}

}
