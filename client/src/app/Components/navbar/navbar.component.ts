import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { JobService } from 'src/app/Service/job.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  role:any;
  // @Input() isLoggedIn: any;
  menuType: String = 'default';
  isLoggedIn: boolean = false;
  constructor(private route: Router, private _jobService: JobService) {
    this.isLoggedIn = _jobService.isLoggedIn();
    // console.log("from navbar", this.isLoggedIn);
    this.role=localStorage.getItem("role");
  }


    ngOnInit(): void {
       this.route.events.subscribe((val: any) => {

          if (val.routerEvent.url) {

            // console.warn(val.routerEvent.url);

            //  console.warn(val.routerEvent.url);
            if (val.routerEvent.url.includes('rlogin')) {
              this.menuType = 'rlogin'
            } else if (val.routerEvent.url.includes('rProfile')) {
              this.menuType = 'rprofile'
            } else if (val.routerEvent.url.includes('jobList')) {
              this.menuType = 'joblist'
            } else if (val.routerEvent.url.includes('addjob')) {
              this.menuType = 'addjob'
            } else if (val.routerEvent.url.includes('addjob')) {
              this.menuType = 'addjob'
            }else if (val.routerEvent.url.includes('jsProfile')) {
              this.menuType = 'jsprofile'
            } else {
              this.menuType = 'home'
            }

          }
        })
     }
    // this.isLoggedIn=this._jobService.isLoggedIn();



    onLogOut() {
      this.isLoggedIn = false
      localStorage.clear();
      this.route.navigate(['/']);
    }
  }




