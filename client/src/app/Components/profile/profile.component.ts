import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(private route: Router){}
  menuType: String='';
  ngOnInit(): void{
      this.route.events.subscribe((val:any)=>{
          // console.warn(val.routerEvent.url);
          if(val.routerEvent.url.includes('rProfile')){
            this.menuType='rProfile'
            
          }else{
            this.menuType='jsProfile'
          }
      })
  }

}
