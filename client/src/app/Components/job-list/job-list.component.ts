import { Component } from '@angular/core';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent {
  role:any;

  constructor(){
    this.role=localStorage.getItem("role");
    // console.log(this.role);
  }
}
