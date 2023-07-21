import { Component } from '@angular/core';
import { Recruiter } from 'src/app/Entity/recruiter';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-rprofile',
  templateUrl: './rprofile.component.html',
  styleUrls: ['./rprofile.component.css']
})
export class RProfileComponent {
  
  recruiter!: Recruiter;
  constructor(private service : JobService){
    this.recruiter=service.getRecruiterData();
    console.log('rprofile',this.recruiter);
    }
  

} 
