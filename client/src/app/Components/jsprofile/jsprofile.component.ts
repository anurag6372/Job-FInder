import { Component } from '@angular/core';
import { JobSeeker } from 'src/app/Entity/job-seeker';
import { JobService } from 'src/app/Service/job.service';

@Component({
  selector: 'app-jsprofile',
  templateUrl: './jsprofile.component.html',
  styleUrls: ['./jsprofile.component.css']
})
export class JSProfileComponent {

jobseeker!: JobSeeker;
constructor(private service: JobService){
  this.jobseeker = service.getJobSeekerData();
  console.log('jsprofile',this.jobseeker);
}

}
