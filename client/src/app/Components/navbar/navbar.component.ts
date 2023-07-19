import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuType: String='default';
  constructor(private route:Router){

  }
  ngOnInit(): void{
    this.route.events.subscribe((val:any)=>{
  
      if(val.routerEvent.url){
          console.warn(val.routerEvent.url);
          if(val.routerEvent.url.includes('rlogin')){
              this.menuType='recruiter'
          }
        }
    })
  }

}
